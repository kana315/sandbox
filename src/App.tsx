import React, { useReducer, useContext, Dispatch } from "react";

enum Action {
  reset = "reset",
  onChange = "onChange"
}

interface InputState {
  text: string;
}

interface InputAction {
  type: Action;
  newText?: string;
}

const initialState: InputState = { text: "" };

function reducer(state: InputState, action: InputAction): InputState {
  switch (action.type) {
    case Action.reset: {
      return initialState;
    }
    case Action.onChange: {
      return { text: action.newText || "" };
    }
    default: {
      return state;
    }
  }
}

// Container
const InputContext = React.createContext<InputState>(initialState);
const DispatchContext = React.createContext<Dispatch<InputAction>>(() => {});

// Connected component
function Input() {
  const state = useContext(InputContext);
  const dispatch = useContext(DispatchContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Action.onChange,
      newText: e.currentTarget.value
    });
  };
  return (
    <div>
      Text:
      <input onChange={handleChange} value={state.text} />
      <button onClick={() => dispatch({ type: Action.reset })}>Reset</button>
    </div>
  );
}

export default function App({ initialValue }: { initialValue: string }) {
  const [state, dispatch] = useReducer(reducer, { text: initialValue });
  return (
    <InputContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Input />
      </DispatchContext.Provider>
    </InputContext.Provider>
  );
}

