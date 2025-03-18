import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
