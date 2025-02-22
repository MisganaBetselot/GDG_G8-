import React, { useState } from "react";
import "./Counter.css"; // Import CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="btn increment">
          +
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          className="btn decrement" 
          disabled={count === 0}
        >
          -
        </button>
        <button onClick={() => setCount(0)} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
