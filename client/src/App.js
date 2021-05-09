import './App.scss';
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Timer from './pages/Timer/Timer';
import Home from './pages/Home/Home';
import axios from 'axios';
class App extends React.Component {

  state = {
    isDrawerOpen: false,
    timer: {
      startTime: null, 
      pomodoro: true,
      taskName: ''
    },
    timeEntries: []
  }

  startTimer() {
    axios.post(`http://localhost:8080/entries`)
    .then(() => {
      this.setState({
        timer: {
          ...this.state.timer,
          startTime: new Date().toString()
        }
      })
    })
    .catch((err) => {
      console.log(err)
  })
}

  stopTimer() {
    axios.patch(`http://localhost:8080/entries`)
    .then(() => {
      this.setState({
        timer: {
          ...this.state.timer,
          startTime: null
        }
      })
    })
  }

  // setPomodoro function(active: boolean): void
  setPomodoro(active) { 
    this.setState({
      timer: { 
        ...this.state.timer,
        pomodoro: active 
      }
    })
  }

  // setTaskName function(taskName: string): void
  setTaskName(taskName) {
    this.setState({
      timer: { 
        ...this.state.timer, 
        taskName: taskName
      }
    })
  }

  toggleDrawer() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen 
    })
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            exact path="/"
            render={(routerProps) => (
              <Home 
                toggleDrawer={() => this.toggleDrawer()}
                isDrawerOpen={this.state.isDrawerOpen}
                {...routerProps}
              />
            )}
          />
          <Route 
            exact path="/timer" 
            render={(routerProps) => (
              <Timer 
                timer={this.state.timer} 
                toggleDrawer={() => this.toggleDrawer()}
                isDrawerOpen={this.state.isDrawerOpen}
                startTimer={() => {this.startTimer()}}
                stopTimer={() => {this.stopTimer()}}
                setPomodoro={(active) => {this.setPomodoro(active)}}
                setTaskName={(taskName) => {this.setTaskName(taskName)}}
                {...routerProps}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
