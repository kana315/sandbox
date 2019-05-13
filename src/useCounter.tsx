import { useReducer } from "react";

export interface Counter {
  type: "increase" | "degrease" | "";
  value: number;
}
const useCounter = (initValue: Counter): [Counter, (v: Counter) => void] => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, value: state.value + 1 };
      case "degrease":
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
  }, initValue);
  return [count, dispatch];
};
export default useCounter;
