import React,{useState} from 'react'

const initialState=0;

export default function Counter() {
    const [count, setCount] = useState(initialState);

    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
