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

const reducer: React.Reducer<InputState, InputAction> = (state, action) => {
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
};

const InputContext = React.createContext<InputState>(initialText);
const DispatchContext = React.createContext<Dispatch<InputAction>>(null as any);

const InputArea: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialText);

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
};

const Input: React.FC = () => {
  const state = useContext(InputContext);
  const dispatch = useContext(DispatchContext);
  return (
    <InputContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <InputArea />
      </DispatchContext.Provider>
    </InputContext.Provider>
  );
};
export default Input;
