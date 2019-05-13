import React, { useLayoutEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";
import Demo from "./Demo";

const App: React.FC = () => {
  const [count, dispatch] = useCounter({ type: "", value: 0 });
  const textareaRef = useRef({} as HTMLTextAreaElement);
  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count.value}</p>
        <button onClick={() => dispatch({ ...count, type: "increase" })}>
          Up
        </button>
        <button onClick={() => dispatch({ ...count, type: "degrease" })}>
          down
        </button>
        <textarea ref={textareaRef} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Demo initialCount={3} />
      </header>
    </div>
  );
};

export default App;
