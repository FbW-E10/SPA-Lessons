import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (prevState, action) => {
  switch (action.type) {
    case "increment":
      return { count: prevState.count + 1 };
    case "decrement":
      return { count: prevState.count - 1 };
    case "reset":
      return initialState;
    default:
      return prevState;
  }
};

export default function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>
  Count: {state.count}
  <button onClick={()=> dispatch({type: 'reset' })}>Reset</button>
  <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
  <button onClick={()=> dispatch({type: 'increment'})}>+</button>
  </div>;
}
