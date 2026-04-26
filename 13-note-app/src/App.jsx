import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask)
    setTitle("");
    setDetail("")
  };

  const deleteNote = (idx)=> {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="lg:h-screen lg:flex bg-black">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-center p-10 flex-col  gap-4"
      >
        <h1 className="text-white text-4xl font-bold text-start">Add Notes</h1>
        {/* first input for heading */}
        <input
          type="text"
          placeholder="enter notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="capitalize px-5 w-full py-2 border-2 rounded outline-none text-amber-50"
        />

        {/* second textarea for details*/}
        <textarea
          type="text"
          placeholder="write details"
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
          className="capitalize px-5 w-full py-2 h-32 border-2 rounded outline-none text-amber-50"
        />
        <button className="cursor-pointer bg-white w-full text-black px-5 py-2 rounded-2xl">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2  lg:border-l-2 border-amber-50 h-full p-10">
        <h1 className="text-white text-4xl font-extrabold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
         {task.map(function(elem,idx){

          return  <div key={idx} className="p-4 flex flex-col justify-between text-black h-52 w-40 rounded-2xl bg-[#dadada]">
            <h3 className="capitalize font-bold text-xl leading-tight">{elem.title}</h3>
            <p className="capitalize text-gray-400 mt-2 leading-tight font-medium">{elem.detail}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="w-full cursor-pointer py-1 bg-red-600 text-xs rounded font-bold text-white">Delete</button>
          </div>

         })}
        </div>
      </div>
    </div>
  );
};
export default App;
