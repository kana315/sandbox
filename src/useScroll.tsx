import React, { useEffect, useRef, useState } from "react";

export interface State {
  x: number;
  y: number;
}

const useScroll = (ref: React.RefObject<HTMLElement>): State => {
  if (process.env.NODE_ENV === "development") {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.log("error");
    }
  }
  const frame = useRef(0);
  const [state, setState] = useState({ x: 0, y: 0 });

  // console.log("ref", ref);
  // console.log("frame", frame);

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (ref.current) {
          setState({
            x: ref.current.scrollLeft,
            y: ref.current.scrollTop
          });
        }
      });
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handler, {
        capture: false,
        passive: true
      });
    }

    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
        console.log("frame", frame);
      }

      if (ref.current) {
        ref.current.removeEventListener("scroll", handler);
      }
    };
  }, [ref.current]);

  console.log(state);
  return state;
};

export default useScroll;
