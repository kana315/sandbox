import React, { useState } from "react";

const useHover = (initialValue?: any): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useState(initialValue);

  const hover = React.useCallback(() => {
    setValue((currentValue: any) => !currentValue);
  }, []);
  return [value, hover];
};

const Hover = () => {
  const [on, hover] = useHover(false);
  const currentValue = on ? "ON" : "OFF";

  return (
    <div>
      <div>{currentValue}</div>
      <button onMouseEnter={hover} onMouseLeave={hover}>
        Hover
      </button>
    </div>
  );
};

export default Hover;
