import React from "react";
import batteryDisconnected from "./images/battery-disconnected.svg";
import batteryConnected from "./images/battery-connected.svg";
import Image from "next/image";
import { useBoolean } from "./useBoolean";

interface ToggleBatteryProps {
  batteryOn: boolean;
  setBatteryOn: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleBattery({ batteryOn, setBatteryOn }: ToggleBatteryProps) {
  const { value, toggle } = useBoolean(batteryOn); // Initialize the hook with the value of batteryOn prop

  const BatteryImageSrc = value ? batteryConnected : batteryDisconnected;

  // Call setBatteryOn when the state in the hook changes
  React.useEffect(() => {
    setBatteryOn(value);
  }, [value, setBatteryOn]);

  return (
    <div className="block m-auto">
      <Image
        className="block m-auto py-4"
        src={BatteryImageSrc}
        width={65}
        height={65}
        alt="Bulb"
      />
      <button className="text-black bg-gray-200 p-3" onClick={toggle}>
        {value ? "Disconnect" : "Connect"} battery
        {/* Update the button text dynamically */}
      </button>
    </div>
  );
}

export default ToggleBattery;
