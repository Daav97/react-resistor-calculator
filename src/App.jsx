import CalculatorBox from "./Components/CalculatorBox/CalculatorBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [calculators, setCalculators] = useState([{ id: 0 }]);

  const handleCloseCalculatorBox = (id) => {
    setCalculators((prev) => prev.filter((calculator) => calculator.id !== id));
  };

  const addCalculatorBox = () => {
    //Se utiliza un ID generado por fecha para dejar de utilizar el index, permitiendo así poder eliminar cerrar una caja deseada.
    setCalculators((prev) => [...prev, { id: Date.now() }]);
  };

  return (
    <div className="mainContainer">
      <h1 className="title">CALCULADORA DE RESISTENCIAS</h1>
      <div className="calculatorsArea">
        {calculators.map((calc, idx) => (
          <CalculatorBox
            key={calc.id}
            num={idx + 1}
            onCloseClick={() => handleCloseCalculatorBox(calc.id)}
          />
        ))}
        <div className="buttonSpace">
          <button className="addButton" onClick={addCalculatorBox}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
