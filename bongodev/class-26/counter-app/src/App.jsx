import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const discreaseCount=()=>{
    setCount(count-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Count: {count}</h1>
      <div className="flex space-x-4">
      <button
        onClick={increaseCount}
        className="px-6 py-2 bg-blue-500 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        +
      </button>
      <button onClick={discreaseCount}
      className="px-6 py-2 bg-blue-500 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"

      > -</button>
      </div>
    </div>
  );
}

export default App;
