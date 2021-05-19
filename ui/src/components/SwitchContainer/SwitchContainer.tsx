import React, { ChangeEvent } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Timer } from "../../App.model";

interface SwitchProps {
  timer: Timer;
  setPomodoro: (active: boolean) => void;
}

export const SwitchContainer: React.FC<SwitchProps> = ({
  setPomodoro,
  timer,
}) => {
  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPomodoro(event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={timer.pomodoro}
          onChange={(event) => handleSwitchChange(event)}
        />
      }
      labelPlacement="start"
      label={timer.pomodoro ? "Pomodoro" : "Standard"}
    />
  );
};
