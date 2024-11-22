import { useState } from "react";
import Resistor from "./Resistor.jsx";
import { AVAIBLE_BAND_COLORS_POSITIONS as POSITIONS } from "./BandColors/AvaibleBandColorsPositions.js";
import { NUMEROS_ORDINALES } from "./NumerosOrdinales.js";

const DEFAULT_BAND_COLORS = [
  POSITIONS[3][1][0],
  POSITIONS[3][1][1],
  POSITIONS[3][1][2],
];

const CalculatorBox = () => {
  const [size, setSize] = useState(500);
  const [bandColors, setBandColors] = useState([...DEFAULT_BAND_COLORS]);
  const [selectedBand, setSelectedBand] = useState(2);

  const handleBandCountSlider = (count) => {
    setSelectedBand(null);
    setBandColors((prev) => {
      if (count > prev.length) {
        return [...prev, POSITIONS[3][1][0]];
      }
      if (count < prev.length) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  return (
    <div className="calculatorBoxBody">
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
      Cantidad de bandas: {bandColors.length}
      <input
        type="range"
        min="3"
        max="6"
        value={bandColors.length}
        className="slider"
        id="myRange"
        onChange={(e) => handleBandCountSlider(e.target.value)}
      />
      <Resistor
        containerWidth={size}
        onBandClick={(idx) => {
          setSelectedBand(idx);
          console.log(`Click en banda: ${idx + 1}`);
        }}
        bandsColors={bandColors.map((bc) => bc.colorHexCode)}
        selectedBand={selectedBand}
      />
      <p>
        Selecciona{" "}
        {selectedBand != null ? (
          <>
            el color de la <b>{NUMEROS_ORDINALES[selectedBand]}</b> banda:
          </>
        ) : (
          "una banda para elegir su color"
        )}
      </p>
      <p>Valor de la resistencia: </p>
    </div>
  );
};
export default CalculatorBox;
