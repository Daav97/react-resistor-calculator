import React, { useEffect, useState } from "react";

const Resistor = ({ bandCount = 4, containerWidth = 700, drawParams }) => {
  //Valores default de dibujo + sobreesctitura de parametros
  const {
    viewBoxWidth,
    viewBoxHeight,
    strokeWidth,
    resistorBodyWidth,
    resistorBodyHeight,
  } = {
    ...{
      viewBoxWidth: 300,
      viewBoxHeight: 100,
      strokeWidth: 1,
      resistorBodyWidth: 200,
      resistorBodyHeight: 50,
    },
    ...drawParams,
  };

  const containerHeight = containerWidth / 3;

  const resistorBodyX = viewBoxWidth / 2 - resistorBodyWidth / 2;
  const resistorBodyY = viewBoxHeight / 2 - resistorBodyHeight / 2;

  const cableWidth = (viewBoxWidth - resistorBodyWidth - strokeWidth) / 2;
  const cableHeight = resistorBodyHeight / 5;
  const cableY = viewBoxHeight / 2 - cableHeight / 2;
  const firstCableX = strokeWidth / 2;
  const secondCableX = viewBoxWidth / 2 + resistorBodyWidth / 2;

  const bandWidth = (resistorBodyWidth * 0.3) / bandCount;
  const bandHeight = resistorBodyHeight - strokeWidth;

  const bandSpacing = (resistorBodyWidth * 0.6) / bandCount;
  const totalBandWidth = bandCount * bandWidth + (bandCount - 1) * bandSpacing;

  const bandsStartX = resistorBodyX + (resistorBodyWidth - totalBandWidth) / 2;
  const bandsY = resistorBodyY + strokeWidth / 2;
  const bandTextSize = bandWidth;

  const [bandColors, setBandColors] = useState(
    Array(bandCount).fill("#000000")
  );
  const [bandValues, setBandValues] = useState([0, 1, 2, 3]); // Valores iniciales de las bandas

  // Lista de colores y valores correspondientes
  const colorOptions = [
    { color: "#000000", value: 0 },
    { color: "#964B00", value: 1 },
    { color: "#FF0000", value: 2 },
    { color: "#FFA500", value: 3 },
    { color: "#FFFF00", value: 4 },
    { color: "#00FF00", value: 5 },
    { color: "#0000FF", value: 6 },
    { color: "#800080", value: 7 },
    { color: "#808080", value: 8 },
    { color: "#FFFFFF", value: 9 },
  ];

  // Función para cambiar el color y valor de una banda
  const handleBandClick = (bandIndex) => {
    setBandColors((prevColors) => {
      const currentColorIndex = colorOptions.findIndex(
        (option) => option.color === prevColors[bandIndex]
      );
      const nextColorIndex = (currentColorIndex + 1) % colorOptions.length;

      const newColors = [...prevColors];
      newColors[bandIndex] = colorOptions[nextColorIndex].color;

      // Actualizamos también el valor de la banda
      setBandValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[bandIndex] = colorOptions[nextColorIndex].value;
        return newValues;
      });

      return newColors;
    });
  };

  useEffect(() => {
    setBandColors(Array(+bandCount).fill("#000000"));
  }, [bandCount]);

  return (
    <svg
      width={containerWidth}
      height={containerHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ border: "1px solid #ccc" }}
    >
      {/* Cuerpo de la resistencia */}
      <rect
        x={resistorBodyX}
        y={resistorBodyY}
        width={resistorBodyWidth}
        height={resistorBodyHeight}
        fill="#D3D3D3"
        stroke="#000"
        strokeWidth={strokeWidth}
        rx="10"
        ry="10"
      />

      {/* Cables de la resistencia */}
      <rect
        x={firstCableX}
        y={cableY}
        width={cableWidth}
        height={cableHeight}
        fill="#D3D3D3"
        strokeWidth={strokeWidth}
        stroke="#000"
      />
      <rect
        x={secondCableX}
        y={cableY}
        width={cableWidth}
        height={cableHeight}
        fill="#D3D3D3"
        strokeWidth={strokeWidth}
        stroke="#000"
      />

      {/* Bandas de colores y números */}
      {bandColors.map((color, index) => (
        <>
          <g
            key={index}
            onClick={() => handleBandClick(index)}
            style={{ cursor: "pointer" }}
          >
            {/* Banda de color */}
            <rect
              x={bandsStartX + index * (bandWidth + bandSpacing)}
              y={bandsY}
              width={bandWidth}
              height={bandHeight}
              fill={color}
            />
            {/* Número de la banda */}
            <text
              x={
                bandsStartX + index * (bandWidth + bandSpacing) + bandWidth / 2
              }
              y={bandsY + bandHeight / 2 + bandTextSize / 3}
              fontSize={bandTextSize}
              textAnchor="middle"
              fill="#ffffff"
              style={{ userSelect: "none" }}
            >
              {index + 1}
            </text>
          </g>
        </>
      ))}
    </svg>
  );
};

export default Resistor;
