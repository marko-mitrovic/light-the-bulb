"use client";
import bulbOff from "./images/bulb-off.svg";
import bulbOn from "./images/bulb-on.svg";
import ToggleSwitch from "./ToggleSwitch";
import ToggleBattery from "./ToggleBattery";
import React, { useState } from "react";
import Bulb from "./Bulb";

export default function Home() {
  const [batteryOn, setBatteryOn] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="bg-gray-100 h-screen grid items-center justify-center">
      <div className="w-72 bg-white border-gray-200 border p-3">
        <div className="">
          <p className="text-black text-center">Light the Bulb</p>
        </div>
        <Bulb src={batteryOn && switchOn ? bulbOn : bulbOff} alt="Bulb" />
        <div className="flex">
          <ToggleBattery batteryOn={batteryOn} setBatteryOn={setBatteryOn} />
          <ToggleSwitch switchOn={switchOn} setSwitchOn={setSwitchOn} />
        </div>
        <p
          className={`${!batteryOn && switchOn && "text-red-500"} ${
            batteryOn && !switchOn && "text-green-500"
          } ${
            batteryOn && switchOn && "text-green-500"
          } absolute text-center p-5 mt-2`}
        >
          {!batteryOn && switchOn ? "There is no electric supplay!" : ""}
          {batteryOn && !switchOn ? "Electric supplay is on." : ""}
          {batteryOn && switchOn ? "Bulb is on." : ""}
        </p>
      </div>
    </div>
  );
}
