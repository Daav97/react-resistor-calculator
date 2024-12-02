import { useEffect, useState } from "react";
import Resistor from "../Resistor/Resistor.jsx";
import { AVAILABLE_BAND_COLORS_POSITIONS as POSITIONS } from "../../Utils/BandColors/AvailableBandColorsPositions.js";
import { NUMEROS_ORDINALES } from "../../data/NumerosOrdinales.js";
import "./CalculatorBox.css";
import SelectableColor from "../SelectableColor/SelectableColor.jsx";
import {
  calculateResistorValues,
  convertToShortScale,
  validateBandPositions,
} from "./CalculatorBoxLogic.js";
import InfoIcon from "../InfoIcon/InfoIcon.jsx";
import Explanation from "../Explanation/Explanation.jsx";

const DEFAULT_BAND_COLORS = [
  POSITIONS[4][0][1],
  POSITIONS[4][1][0],
  POSITIONS[4][2][2],
  POSITIONS[4][3][0],
];

const CalculatorBox = ({ num, onCloseClick }) => {
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
      <div className="header">
        <p className="num">#{num}</p>
        <button className="closeButton" onClick={onCloseClick}>
          X
        </button>
      </div>
      <p className="margin-bottom">Cantidad de bandas: {bandColors.length}</p>
      <input
        type="range"
        min="3"
        max="6"
        value={bandColors.length}
        className="slider margin-bottom"
        id="myRange"
        onChange={(e) => handleBandCountSlider(e.target.value)}
      />
      <Resistor
        onBandClick={(idx) => {
          setSelectedBand(idx);
          setSelectableColors(POSITIONS[bandColors.length][idx]);
        }}
        bandsColors={bandColors.map((bc) => bc.colorHexCode)}
        selectedBand={selectedBand}
      />
      <p className="margin-bottom margin-top">
        Selecciona
        {selectedBand != null ? (
          <> el color de la {NUMEROS_ORDINALES[selectedBand]} banda:</>
        ) : (
          " alguna banda para elegir su color"
        )}
      </p>
      <div className="selectableColors margin-bottom">
        {selectableColors.map((sc, idx) => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
        }}
        className="margin-bottom"
      >
        <InfoIcon
          child={<Explanation bands={bandColors} />}
          bgColor={"#3d3d3d"}
          color={"black"}
        />
        <p>Valor de la resistencia:</p>
      </div>
      <div className="resultDisplay margin-bottom">
        {result?.total && `${convertToShortScale(result.total)}Ω `}
        {result?.tolerance && `±${result.tolerance?.tolerance}% `}
        {result?.temperature && `${result.temperature.temperature} ppm`}
      </div>
    </div>
  );
};
export default CalculatorBox;
