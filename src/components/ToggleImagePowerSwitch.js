import "../ToggleImages.css";
import React from "react";
// import Bulboff from "../images/bulb-off.svg";
// import Bulbon from "../images/bulb-on.svg";
import PowerSwitchOn from "../images/power-switch-on.svg";
import PowerSwitchOff from "../images/power-switch-off.svg";

function ToggleImagePowerSwitch({ active }) {
  return (
    <>
      {active ? (
        <>
          {/* <img className="bulb" src={Bulbon} alt="" /> */}
          <img className="battery" src={PowerSwitchOn} alt="" />
        </>
      ) : (
        <>
          {/* <img className="bulb" src={Bulboff} alt="" /> */}
          <img className="battery" src={PowerSwitchOff} alt="" />
        </>
      )}
    </>
  );
}

export default ToggleImagePowerSwitch;
