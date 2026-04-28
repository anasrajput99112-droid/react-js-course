import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );

    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
         <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-[100vh] overflow-auto lg:h-screen p-4 text-white">
      <h1 className="text-4xl font-bold">{index}</h1>
     
      <div className="flex flex-wrap gap-4">{printUserData}</div>
     
      <div className="flex justify-center items-center p-4 m-3">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          style={{opacity:index == 1?0.5 : 1}}
          className="cursor-pointer bg-amber-300 py-3 px-7 text-black font-bold  rounded m-4"
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="cursor-pointer bg-amber-300 py-3 px-7 text-black font-bold  rounded m-4"
        >

          Next
        </button>
      </div>
    </div>
  );
};

export default App;
