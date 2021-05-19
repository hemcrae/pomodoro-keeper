import React from "react";
import { TimerFooter } from "../../components/TimerFooter/TimerFooter";
import "./Reports.scss";
import { Bar } from "react-chartjs-2";
import { TimeCard } from "../../components/TimeCard/TimeCard";
import { formatDate } from "../../utils/time.utils";
import { AppDrawer } from "../../components/AppDrawer/AppDrawer";
import { Header } from "../../components/Header/Header";
import {
  GroupedEntries,
  MongoEntry,
  Timer,
  TotalObject,
} from "../../App.model";

interface ReportsProps {
  timer: Timer;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  startTimer: () => void;
  stopTimer: () => void;
  setPomodoro: (active: boolean) => void;
  setTaskName: (name: string) => void;
  openDialog: () => void;
  timeEntries: MongoEntry[];
}

export const Reports: React.FC<ReportsProps> = ({
  toggleDrawer,
  isDrawerOpen,
  timer,
  startTimer,
  stopTimer,
  setPomodoro,
  setTaskName,
  openDialog,
  timeEntries,
}) => {
  const totalObject = timeEntries.reduce((acc: TotalObject, entry) => {
    const startTimeDate = new Date(entry.startTime);
    const endTimeDate = new Date(entry.endTime);
    const startTimeUnix = startTimeDate.getTime();
    const endTimeUnix = endTimeDate.getTime();
    const diff = Math.floor((endTimeUnix - startTimeUnix) / 1000);
    const stringDate = formatDate(startTimeDate, [
      { day: "numeric" },
      "-",
      { month: "numeric" },
      "-",
      { year: "numeric" },
    ]);
    acc[stringDate] = acc[stringDate] || 0;
    acc[stringDate] = acc[stringDate] + diff;
    return acc;
  }, {});

  const groupedTimeEntries = timeEntries.reduce(
    (acc: GroupedEntries, entry) => {
      const startTimeDate = new Date(entry.startTime);
      const stringDate = formatDate(startTimeDate, [
        { day: "numeric" },
        "-",
        { month: "numeric" },
        "-",
        { year: "numeric" },
      ]);
      acc[stringDate] = acc[stringDate] || [];
      acc[stringDate] = [...acc[stringDate], entry];
      return acc;
    },
    {}
  );

  const data = {
    labels: Object.keys(totalObject),
    datasets: [
      {
        label: "Hours",
        data: Object.values(totalObject).map((sec) => sec / 60 / 60),
        backgroundColor: "rgba(197,209,235,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <AppDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div>
        <Bar
          type="bar"
          height={100}
          data={data}
          options={{
            scales: {
              yAxes: [
                {
                  type: "time",
                  time: {
                    parser: "HH:mm:ss",
                    unit: "hour",
                    stepSize: 1,
                    displayFormats: {
                      hour: "HH:mm",
                    },
                  },
                },
              ],
            },
          }}
        />
      </div>
      {groupedTimeEntries &&
        Object.entries(groupedTimeEntries).map(([day, entries]) => (
          <TimeCard key={day} entries={entries} />
        ))}
      <TimerFooter
        timer={timer}
        startTimer={startTimer}
        stopTimer={stopTimer}
        setPomodoro={setPomodoro}
        setTaskName={setTaskName}
        openDialog={openDialog}
      />
    </>
  );
};
