import React from "react";
import { useState } from "react";

const App = () => {
 const [title, settitle] = useState('a')
  return (
    <div>
      <form
       
      >
        <input type="text" value={title} placeholder="Enter your name" />

        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
