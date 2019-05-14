import React, { useReducer, useContext } from "react";

type InputState = Readonly<{
  text: string;
}>;

const types = {
  reset: "reset" as "reset",
  onChange: "onChange" as "onChange"
};

type InputAction =
  | {
      type: "reset";
      newText?: string;
    }
  | {
      type: "onChange";
      newText: string;
    };

const initialState: InputState = { text: "" };

const reducer: React.Reducer<InputState, InputAction> = (state, action) => {
  switch (action.type) {
    case types.reset: {
      return initialState;
    }
    case types.onChange: {
      return { text: action.newText };
    }
    default: {
      return state;
    }
  }
};
// Container
const InputContext = React.createContext<InputState>(initialState);
const DispatchContext = React.createContext<React.Dispatch<InputAction>>(
  () => {}
);

// Connected component
const Input: React.FC<{}> = () => {
  const state = useContext(InputContext);
  const dispatch = useContext(DispatchContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: types.onChange,
      newText: e.currentTarget.value
    });
  };
  return (
    <div>
      Text:
      <input onChange={handleChange} value={state.text} />
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
    </div>
  );
};

const App: React.FC<{ initialValue: string }> = ({ initialValue }) => {
  const [state, dispatch] = useReducer(reducer, { text: initialValue });
  return (
    <InputContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Input />
      </DispatchContext.Provider>
    </InputContext.Provider>
  );
};

export default App;
