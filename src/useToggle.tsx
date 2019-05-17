import React, { useState, useCallback } from "react";

const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(
    nextValue => {
      if (typeof nextValue == "boolean") {
        setValue(nextValue);
      } else {
        setValue(currentValue => !currentValue);
      }
    },
    [setValue]
  );

  return [value, toggle];
};

const ToggleDemo = () => {
  const [on, toggle] = useToggle(true);
  const currentValue = on ? "ON" : "OFF";

  return (
    <div>
      <h2>{currentValue}</h2>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>ON</button>
      <button onClick={() => toggle(false)}>OFF</button>
    </div>
  );
};

export default ToggleDemo;
