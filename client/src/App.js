import './App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Timer } from './pages/Timer/Timer';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Reports } from './pages/Reports/Reports';
import { Home } from './pages/Home/Home';
import { PomodoroDialog } from './components/PomodoroDialog/PomodoroDialog';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';


export const App = () => {

  const { getAccessTokenSilently } = useAuth0();

  const [accessToken, setAccessToken] = useState('');
  const [timeEntries, setTimeEntries] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [timer, setTimer] = useState({
    id: null,
    startTime: null, 
    pomodoro: true,
    taskName: ''
  });

  
  useEffect(() => {
    getAccessTokenSilently({
      audience: `http://localhost:8080`,
      scope: "read:entries write:entries",
    }).then((accessToken) => {
      setAccessToken(accessToken)
    }).catch(error => {
      console.error(error)
    });
  }, [getAccessTokenSilently, setAccessToken])

  useEffect(() => {
    if (!accessToken) {
      return
    } 
    axios.get(`http://localhost:8080/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(({data}) => {
      setTimeEntries(data.data)
    }).catch((error) => {
      console.error(error)
    })

    axios.get(`http://localhost:8080/entries?endTime=null`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(({data}) => {
      if (!data.data || !data.data.length) {
        return
      }

      const entry = data.data[0]

      setTimer({
        id: entry._id,
        startTime: entry.startTime,
        taskName: entry.name,
      })
    }).catch((error) => {
      console.error(error)
    })
  }, [accessToken])

  function startTimer() {
    const now = new Date().toString()
    axios.post(`http://localhost:8080/entries`, {
      name: timer.taskName,
      type: 'standard',
      startTime: now
    }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
    })
    .then(({ data }) => {
      setTimer({
        ...timer,
        id: data.data._id,
        startTime: now
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function stopTimer() {
    const now = new Date().toString()
    axios.patch(`http://localhost:8080/entries/${timer.id}`, {
      endTime: now
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(({ data }) => {
      setTimer({
        ...timer,
        id: null,
        taskName: '',
        startTime: null
      })
      setTimeEntries([
        ...timeEntries,
        data.data
      ])
    })
  }

  // setPomodoro function(active: boolean): void
  function setPomodoro(active) { 
    setTimer({ 
      ...timer,
      pomodoro: active 
    })
  }

  // setTaskName function(taskName: string): void
  function setTaskName(taskName) {
    setTimer({ 
      ...timer, 
      taskName: taskName
    })
  }

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  function openTimerDialog() {
    setIsDialogOpen(true)
  }

  function handleDialogClose(value) {
    setIsDialogOpen(false)
    if (value) {
      stopTimer();
    }
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route 
            exact path="/"
            render={(routerProps) => (
              <Home 
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
                {...routerProps}
              />
            )}
          />
          <PrivateRoute
            exact path="/timer" 
            render={(routerProps) => (
              <Timer 
                timer={timer} 
                timeEntries={timeEntries}
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
                startTimer={startTimer}
                stopTimer={stopTimer}
                setPomodoro={setPomodoro}
                setTaskName={setTaskName}
                openDialog={openTimerDialog}
                {...routerProps}
              />
            )}
          />
          <PrivateRoute 
            exact path="/reports"
            render={(routerProps) => (
              <Reports
              toggleDrawer={toggleDrawer}
              isDrawerOpen={isDrawerOpen}
              timer={timer}
              timeEntries={timeEntries}
              startTimer={startTimer}
              stopTimer={stopTimer}
              setPomodoro={setPomodoro}
              setTaskName={setTaskName}
              openDialog={openTimerDialog}
              {...routerProps}
              />
            )}
            />
        </Switch>
      </BrowserRouter>
      <PomodoroDialog
        open={isDialogOpen} 
        onClose={handleDialogClose}
      />
    </>
  )
}