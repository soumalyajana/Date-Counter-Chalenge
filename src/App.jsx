import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Count state
  const [step, setStep] = useState(1); // Step state with default value

  const date = new Date("Jun 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      {/* Step Row */}
      <div className="row">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      {/* Count Row */}
      <div className="row">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* Display Date */}
      <div>
        <p>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </p>
        <span>{date.toDateString()}</span>
      </div>

      {/* Reset Button */}
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
