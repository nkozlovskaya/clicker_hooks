import React, { useState, useEffect } from "react";
import "./App.css";

function Clicker() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("hello from clicker");
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        className="btn btn-success count"
        onClick={increment}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger count"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}

export default Clicker;
