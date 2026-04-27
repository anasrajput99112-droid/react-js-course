import axios from 'axios'
import { useState } from 'react';
const App = () => {
  // async function getdata() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );
  //   console.log(response);
  // }
  const [data, setData] = useState([]);

  const getdata = async() => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
    
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h1>{elem.author} {idx}</h1>
        })}
      </div>
    </div>
  );
};

export default App;
