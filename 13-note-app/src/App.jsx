import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  return (
    <div className="lg:h-screen lg:flex bg-black">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-center p-10 flex-col  gap-4"
      >
        <input
          type="text"
          placeholder="enter notes heading"
          className="capitalize px-5 w-full py-2 border-2 rounded outline-none text-amber-50"
        />
        <textarea
          type="text"
          placeholder="write details"
          className="capitalize px-5 w-full py-2 h-32 border-2 rounded outline-none text-amber-50"
        />
        <button className="bg-white w-full text-black px-5 py-2 rounded-2xl">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2  lg:border-l-2 border-amber-50 h-full p-10">
        <h1 className="text-white text-4xl font-extrabold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-[#dadada]"></div>
          <div className="h-52 w-40 rounded-2xl bg-[#dadada]"></div>
        </div>
      </div>
    </div>
  );
};
export default App;
