import React, { useContext, useReducer, Dispatch } from "react";

enum Action {
  reset = "reset",
  onChange = "onChange"
}

interface InputState {
  text: string;
  length?: number;
}

interface InputAction {
  actionType: Action;
  newText?: string;
}

const initialText: InputState = { text: "" };
const InputContext = React.createContext<InputState>(initialText);
const DispatchContext = React.createContext<Dispatch<InputAction>>(null as any);

function Input() {
  const [state, dispatch] = useReducer(reducer, initialText);
  function reducer(state: InputState, action: InputAction): InputState {
    switch (action.actionType) {
      case Action.reset: {
        return initialText;
      }
      case Action.onChange: {
        return {
          text: action.newText || ""
        };
      }
      default: {
        return state;
      }
    }
  }

  return (
    <InputContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <InputArea />
      </DispatchContext.Provider>
    </InputContext.Provider>
  );
}
function InputArea() {
  const state = useContext(InputContext);
  const dispatch = useContext(DispatchContext);
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      actionType: Action.onChange,
      newText: e.currentTarget.value
    });
  };

  return (
    <div>
      <h2>Text:{state.text}</h2>
      <input onChange={inputChange} value={state.text} />
      <button onClick={() => dispatch({ actionType: Action.reset })}>
        Reset?
      </button>
    </div>
  );
}
export default Input;
