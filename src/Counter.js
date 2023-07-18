import React, { useState } from 'react'
function Counter() {
  const [counter, setCounter] = useState(0);
  function inc() {
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1)
  }
  return (
    <div>
      {/* <button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button> */}
      <button onClick={() => { if (counter < 10) setCounter(counter + 1) }}>Increment</button>
      <button onClick={() => { if (counter > 0) setCounter(counter - 1) }}>Decrement</button>
      <h1>{counter}</h1>
    </div>
  )
  
}


export default Counter;

