import React, { useState } from "react";

const noop = () => {};

export type Element =
  | ((state: boolean) => React.ReactElement<any>)
  | React.ReactElement<any>;

const useHover = (element: any) => {
  // console.log(element.props);
  const [hoverState, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = (leave?: any) => (event: any) => {
    (leave || noop)(event);
    setHovered(false);
  };

  if (typeof element === "function") {
    element = element(hoverState);
  }
  const el = React.cloneElement(element, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave(element.props.onMouseEnter)
  });
  // console.log(el);
  return [el, hoverState];
};

const HoverDemo = () => {
  const initialElement = (hovered: any) => (
    <button
      onMouseEnter={(e: any) => {
        console.log("init enter", e);
      }}
    >
      {hovered ? "Hoverd!" : "Hover me"}
    </button>
  );
  const [hoverable, hovered] = useHover(initialElement);
  // console.log(hoverable);

  return (
    <div>
      <h2>{hoverable}</h2>
      <div>{hovered && "HOVERED"}</div>
    </div>
  );
};

export default HoverDemo;
