import React, { useState } from "react";

const App = () => {
  // object
    const [num, setNum] = useState({ user: "Anas", age: 18 });

    const btnClicked = () => {
      const newNum = { ...num };
      newNum.user = "Muhammad Anas";
      newNum.age = "19";
      setNum(newNum);
    };

  //  *************************************//
  // Array

  //   const [num, setNum] = useState([10, 20, 30]);
  //   const btnClicked = () => {
  //     const newNum = [...num]
  //     newNum.push(99)
  //     setNum(newNum)
  //   };
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
