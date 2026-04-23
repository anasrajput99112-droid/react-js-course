import React from "react";
import { useState } from "react";

const App = () => {
  
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num+124343)
  }
  function decreaseNum() {
    setNum(num-23434)
  }

  function reset(){
    setNum(0)
  }
  return (
    <div className="counter">
      <h1>${num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
