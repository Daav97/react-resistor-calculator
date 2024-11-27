import CalculatorBox from "./Components/CalculatorBox/CalculatorBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [calculatorsCount, setCalculatorsCount] = useState(1);
  return (
    <div className="mainContainer">
      <h1 className="title">CALCULADORA DE RESISTENCIAS</h1>
      <div className="calculatorsArea">
        {Array.from({ length: calculatorsCount }).map((_, idx) => (
          <CalculatorBox key={idx} />
        ))}
        <div className="buttonSpace">
          <button
            className="addButton"
            onClick={() => setCalculatorsCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
