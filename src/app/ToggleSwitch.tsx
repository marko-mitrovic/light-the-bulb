import React from "react";
import powerSwitchOff from "./images/power-switch-off.svg";
import powerSwitchOn from "./images/power-switch-on.svg";
import Image from "next/image";
import { useBoolean } from "./useBoolean";

interface ToggleSwitchProps {
  switchOn: boolean;
  setSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleSwitch({ switchOn, setSwitchOn }: ToggleSwitchProps) {
  const { value, toggle } = useBoolean(switchOn);

  const powerSwitchImageSrc = switchOn ? powerSwitchOn : powerSwitchOff;
  // Call setBatteryOn when the state in the hook changes
  React.useEffect(() => {
    setSwitchOn(value);
  }, [value, setSwitchOn]);
  return (
    <div className="block m-auto">
      <Image
        className="block m-auto py-4"
        src={powerSwitchImageSrc}
        width={65}
        height={65}
        alt="Bulb"
      />
      <button className="text-black bg-gray-200 p-3" onClick={toggle}>
        Turn {value ? "off" : "on"}
      </button>
    </div>
  );
}

export default ToggleSwitch;
