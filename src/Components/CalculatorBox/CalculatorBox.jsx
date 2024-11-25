import { useState } from "react";
import Resistor from "./Resistor.jsx";
import { AVAIBLE_BAND_COLORS_POSITIONS as POSITIONS } from "./BandColors/AvaibleBandColorsPositions.js";
import { NUMEROS_ORDINALES } from "./NumerosOrdinales.js";
import "./CalculatorBox.css";
import SelectableColor from "./SelectableColor.jsx";

const DEFAULT_BAND_COLORS = [
  POSITIONS[3][1][0],
  POSITIONS[3][1][1],
  POSITIONS[3][1][2],
];

const CalculatorBox = () => {
  const [size, setSize] = useState(500);
  const [bandColors, setBandColors] = useState([...DEFAULT_BAND_COLORS]);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectableColors, setSelectableColors] = useState([]);

  const handleBandCountSlider = (count) => {
    setSelectedBand(null);
    setSelectableColors([]);
    //Si el nuevo numero de bandas es menor que las bandas actuales eliminamos el ultimo elemento, y si es mayor se agrega un nuevo elemento usando las opciones disponibles para el nuevo tamaño.
    setBandColors((prev) => {
      if (count > prev.length) {
        return [...prev, POSITIONS[count].at(-1)[0]];
      }
      if (count < prev.length) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };
  const handleSelectableColorClick = (selectedColor) => {
    setBandColors((prev) => [
      ...prev.slice(0, selectedBand),
      selectedColor,
      ...prev.slice(selectedBand + 1),
    ]);
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
          setSelectableColors(POSITIONS[bandColors.length][idx]);
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
      <div className="selectableColors">
        {selectableColors.map((sc, idx) => (
          <SelectableColor
            key={idx}
            bandColor={sc}
            onSelectableColorClick={() => handleSelectableColorClick(sc)}
          />
        ))}
      </div>
      <p>Valor de la resistencia: </p>
    </div>
  );
};
export default CalculatorBox;
