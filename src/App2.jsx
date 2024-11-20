import { useState } from "react";
import Resistor from "./Components/Resistor.jsx";

const App2 = () => {
  const [size, setSize] = useState(500);
  const [bandCount, setBandCount] = useState(4);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {size}
      <input
        type="range"
        min="1"
        max="1000"
        value={size}
        className="slider"
        id="myRange"
        onChange={(e) => setSize(e.target.value)}
      />
      {bandCount}
      <input
        type="range"
        min="3"
        max="6"
        value={bandCount}
        className="slider"
        id="myRange"
        onChange={(e) => setBandCount(e.target.value)}
      />
      <Resistor containerWidth={size} bandCount={bandCount} />
    </div>
  );
};
export default App2;
