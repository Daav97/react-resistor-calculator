import { useEffect, useState } from "react";
import Resistor from "./Resistor/Resistor.jsx";
import { AVAILABLE_BAND_COLORS_POSITIONS as POSITIONS } from "./BandColors/AvailableBandColorsPositions.js";
import { NUMEROS_ORDINALES } from "../../data/NumerosOrdinales.js";
import "./CalculatorBox.css";
import SelectableColor from "./SelectableColor/SelectableColor.jsx";
import {
  calculateResistorValues,
  convertToShortScale,
  validateBandPositions,
} from "./CalculatorBoxLogic.js";

const DEFAULT_BAND_COLORS = [
  POSITIONS[4][0][1],
  POSITIONS[4][1][0],
  POSITIONS[4][2][2],
  POSITIONS[4][3][0],
];

const CalculatorBox = () => {
  const [size, setSize] = useState(500);
  const [bandColors, setBandColors] = useState([...DEFAULT_BAND_COLORS]);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectableColors, setSelectableColors] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(calculateResistorValues(bandColors));
  }, [bandColors]);

  useEffect(() => {
    setSelectedColor(bandColors[selectedBand]);
  }, [selectedBand]);

  const clearValues = () => {
    setSelectedBand(null);
    setSelectableColors([]);
    setResult(null);
    setSelectedColor(null);
  };

  const handleBandCountSlider = (count) => {
    clearValues();
    //Si el nuevo numero de bandas es menor que las bandas actuales eliminamos el ultimo elemento, y si es mayor se agrega un nuevo elemento usando las opciones disponibles para el nuevo tamaño.
    setBandColors((prev) => {
      if (count > prev.length) {
        return validateBandPositions(
          [...prev, POSITIONS[count].at(-1)[0]],
          count
        );
      }
      if (count < prev.length) {
        return validateBandPositions(prev.slice(0, -1), count);
      }
      return prev;
    });
  };

  const handleSelectableColorClick = (selectedColor) => {
    setSelectedColor(selectedColor);
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
          <>el color de la {NUMEROS_ORDINALES[selectedBand]} banda:</>
        ) : (
          "una banda para elegir su color"
        )}
      </p>
      <div className="selectableColors">
        {selectableColors.map((sc, idx) => {
          // debugger;
          return (
            <SelectableColor
              key={idx}
              bandColor={sc}
              onSelectableColorClick={() => handleSelectableColorClick(sc)}
              isSelected={sc === selectedColor}
            />
          );
        })}
      </div>
      <p>
        Valor de la resistencia:{" "}
        {result?.total && `${convertToShortScale(result.total)}Ω `}
        {result?.tolerance && `±${result.tolerance?.tolerance}%`}
      </p>
    </div>
  );
};
export default CalculatorBox;
