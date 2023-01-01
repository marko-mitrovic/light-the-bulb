import React from "react";

function ButtonText({ active }) {
  return (
    <div>
      {active ? (
        <div>
          <p>Disconnect</p>
        </div>
      ) : (
        <div>
          <p>Connect</p>
        </div>
      )}
    </div>
  );
}

export default ButtonText;
