import React, { useEffect, useRef, useState } from "react";
import { SwitchContainer } from "../SwitchContainer/SwitchContainer";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import { TimerButton } from "../TimerButton/TimerButton";
import "./TimerFooter.scss";
import { formatTime, getTimeDiffInSec } from "../../utils/time.utils";
import { Timer } from "../../App.model";
interface TimerFooterProps {
  timer: Timer;
  setPomodoro: (active: boolean) => void;
  setTaskName: (name: string) => void;
  openDialog: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}

// set for demo, change to 25 minutes after demos
const breaks = [10, 30, 60, 90, 120].sort((a, b) => a - b);

export const TimerFooter: React.FC<TimerFooterProps> = ({
  timer,
  setTaskName,
  setPomodoro,
  openDialog,
  ...timerProps
}) => {
  const interval = useRef<any>(null);
  const [stopwatch, setStopwatch] = useState("0:00:00");

  useEffect(() => {
    console.log(timer.startTime);
    if (!timer.startTime) {
      setStopwatch("0:00:00");
      return;
    }

    console.log(timer.startTime);

    // set stopwatch initially (instant)
    const diff = getTimeDiffInSec(timer.startTime);
    setStopwatch(formatTime(diff));

    // set stopwatch after 1 second, every 1 second
    interval.current = setInterval(() => {
      console.log("test");
      if (!timer.startTime) {
        setStopwatch("0:00:00");
        return;
      }

      const diff = getTimeDiffInSec(timer.startTime);

      if (breaks.some((sec) => diff === sec) && timer.pomodoro) {
        console.log("OPEN");
        openDialog();
      }

      setStopwatch(formatTime(diff));
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [timer.startTime, timer.pomodoro, openDialog]);

  return (
    <>
      <footer className="TimerFooter">
        <div className="TimerFooter__wrap-left">
          <input
            className="TimerFooter__input"
            value={timer.taskName}
            placeholder="Task Name"
            onChange={(event) => setTaskName(event.target.value)}
          />
          <div className="TimerFooter__wrap-switch">
            <Button className="TimerFooter__button">
              <SwitchContainer timer={timer} setPomodoro={setPomodoro} />
            </Button>
            <InfoIcon className="FooterTimer__info-icon" />
          </div>
        </div>
        <div className="TimerFooter__wrap-right">
          <h2 className="TimerFooter__counter">{stopwatch}</h2>
          <TimerButton timer={timer} {...timerProps} />
        </div>
      </footer>
    </>
  );
};
