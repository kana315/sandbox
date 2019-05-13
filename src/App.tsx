import React, { useReducer, useContext, Dispatch } from "react";

type CounterState = {
  count: number;
};

enum Action {
  reset = "reset",
  increment = "increment",
  decrement = "decrement"
}

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: { type: Action }) {
  switch (action.type) {
    case Action.reset: {
      return initialState;
    }
    case Action.increment: {
      return { count: state.count + 1 };
    }
    case Action.decrement: {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}

// Container
const CounterContext = React.createContext<CounterState>(initialState);
const DispatchContext = React.createContext<Dispatch<{ type: Action }>>(
  null as any
);

// Connected component
function Counter() {
  const state = useContext(CounterContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: Action.reset })}>Reset</button>
      <button onClick={() => dispatch({ type: Action.increment })}>+</button>
      <button onClick={() => dispatch({ type: Action.decrement })}>-</button>
    </div>
  );
}

export default function App({ initialCount }: { initialCount: number }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <CounterContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Counter />
      </DispatchContext.Provider>
    </CounterContext.Provider>
  );
}

