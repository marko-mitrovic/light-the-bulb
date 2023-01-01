import "./App.css";
import ToggleImageBattery from "./components/ToggleImageBattery.js";
import ToggleImageBulb from "./components/ToggleImageBulb.js";
import React, { useState } from "react";
import ButtonText from "./components/ButtonText.js";
import ToggleImagePowerSwitch from "./components/ToggleImagePowerSwitch.js";

export const App = () => {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((current) => !current);
  };

  return (
    <div className="App">
      <div className="Box">
        <p className="Title">Light the bulb</p>
        <ToggleImageBulb active={active} />
        <div className="group-battery-and-power-switch">
          <div className="group-battery">
            <ToggleImageBattery active={active} />
            <button onClick={handleChangeActive}>
              <ButtonText active={active} />
            </button>
          </div>
          <div className="group-power-switch">
            <ToggleImagePowerSwitch active={active} />
            <button onClick={handleChangeActive}>
              <ButtonText active={active} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
