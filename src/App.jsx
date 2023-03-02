import React, { useState } from 'react'
import './App.css'

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter -1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrease,
    reset
  };
};

export default function App() {

  const counterL = useCounter();
  const counterR = useCounter();
  
  return (
    <>
      <div>{counterL.counter}</div>
      <button onClick={counterL.increase}>+</button>

      <div>{counterR.counter}</div>
      <button onClick={counterR.increase}>+</button>
    </>
  )
}

