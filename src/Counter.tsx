import React, { useContext, useReducer, Dispatch } from "react";

type CounterState = {
  count: number;
};

enum CounterAction {
  reset = "reset",
  increment = "increment",
  decrement = "decrement",
  tenTimes = "tenTimes",
  double = "double",
  equal = "equal"
}

const initialState: CounterState = { count: 0 };

export default function Counter() {
  const [counterState, counterDispatch] = useReducer(reducer, initialState);

  function reducer(state: CounterState, action: { type: CounterAction }) {
    switch (action.type) {
      case CounterAction.reset: {
        return initialState;
      }
      case CounterAction.increment: {
        return { count: state.count + 1 };
      }
      case CounterAction.decrement: {
        return { count: state.count - 1 };
      }
      case CounterAction.tenTimes: {
        return { count: state.count * 10 };
      }
      case CounterAction.double: {
        return { count: state.count * state.count };
      }
      case CounterAction.equal: {
        return { count: state.count };
      }
      default: {
        return state;
      }
    }
  }

  const CounterContext = React.createContext<CounterState>(initialState);
  const DispatchContext = React.createContext<
    Dispatch<{ type: CounterAction }>
  >(null as any);

  function Count() {
    const state = useContext(CounterContext);
    const dispatch = useContext(DispatchContext);

    return (
      <div>
        <h2>Count:{state.count}</h2>
        <button onClick={() => dispatch({ type: CounterAction.reset })}>
          Reset
        </button>
        <div>
          <button onClick={() => dispatch({ type: CounterAction.increment })}>
            +
          </button>
          <button onClick={() => dispatch({ type: CounterAction.decrement })}>
            -
          </button>
          <button onClick={() => dispatch({ type: CounterAction.double })}>
            **
          </button>
          <button onClick={() => dispatch({ type: CounterAction.tenTimes })}>
            ×10
          </button>
          <button onClick={() => console.log(state.count)}>=</button>
        </div>
      </div>
    );
  }

  return (
    <CounterContext.Provider value={counterState}>
      <DispatchContext.Provider value={counterDispatch}>
        <Count />
      </DispatchContext.Provider>
    </CounterContext.Provider>
  );
}
