import "../ToggleImages.css";
import React from "react";
import Bulboff from "../images/bulb-off.svg";
import Bulbon from "../images/bulb-on.svg";
// import BatteryDisconnected from "../images/battery-disconnected.svg";
// import BatteryConnected from "../images/battery-connected.svg";

function ToggleImageBulb({ active }) {
  return (
    <>
      {active ? (
        <>
          <img className="bulb" src={Bulbon} alt="" />
          {/* <img className="battery" src={BatteryConnected} alt="" /> */}
        </>
      ) : (
        <>
          <img className="bulb" src={Bulboff} alt="" />
          {/* <img className="battery" src={BatteryDisconnected} alt="" /> */}
        </>
      )}
    </>
  );
}

export default ToggleImageBulb;
