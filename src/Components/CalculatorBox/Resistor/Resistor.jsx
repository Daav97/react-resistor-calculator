import "./Resistor.css";

const Resistor = ({
  bandsColors,
  containerWidth = 700,
  drawParams,
  onBandClick,
  selectedBand,
}) => {
  //Valores default de dibujo + sobreesctitura de parametros
  const {
    viewBoxWidth,
    viewBoxHeight,
    strokeWidth,
    resistorBodyWidth,
    resistorBodyHeight,
    strokeColor,
  } = {
    ...{
      viewBoxWidth: 300,
      viewBoxHeight: 100,
      strokeWidth: 0.7,
      resistorBodyWidth: 225,
      resistorBodyHeight: 50,
      strokeColor: "#858585",
    },
    ...drawParams,
  };

  const bandCount = bandsColors.length;

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

  return (
    <svg
      width={containerWidth} //TODO: Quitar esto y manejar en .css
      height={containerHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className="svgContainer"
    >
      <defs>
        <linearGradient
          id="bodyShadowGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="70%" stopColor="#C8A760" /> {/* Color principal */}
          <stop offset="100%" stopColor="#a3884d" /> {/* Sombra */}
        </linearGradient>
        <linearGradient
          id="cableShadowGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="70%" stopColor="#D3D3D3" /> {/* Color principal */}
          <stop offset="100%" stopColor="#A9A9A9" /> {/* Sombra */}
        </linearGradient>
      </defs>
      {/* Cuerpo de la resistencia */}
      <rect
        x={resistorBodyX}
        y={resistorBodyY}
        width={resistorBodyWidth}
        height={resistorBodyHeight}
        fill="url(#bodyShadowGradient)"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx="20"
        ry="20"
      />

      {/* Cables de la resistencia */}
      <rect
        x={firstCableX}
        y={cableY}
        width={cableWidth}
        height={cableHeight}
        fill="url(#cableShadowGradient)"
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />
      <rect
        x={secondCableX}
        y={cableY}
        width={cableWidth}
        height={cableHeight}
        fill="url(#cableShadowGradient)"
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />

      {/* Bandas de colores y números */}
      {bandsColors.map((color, index) => (
        <g
          key={index}
          onClick={() => {
            onBandClick(index);
          }}
          className={`selectableObject ${
            index === selectedBand && "selectedObject"
          }`}
        >
          {/* Banda de color */}
          <rect
            y={bandsY}
            width={bandWidth}
            height={bandHeight}
            fill={color}
            style={{
              transform: `translateX(${
                bandsStartX + index * (bandWidth + bandSpacing)
              }px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
          {/* Número de la banda */}
          <text
            y={bandsY + bandHeight / 2 + bandTextSize / 3}
            fontSize={bandTextSize}
            textAnchor="middle"
            fill="#d4d5d6"
            style={{
              transform: `translateX(${
                bandsStartX + index * (bandWidth + bandSpacing) + bandWidth / 2
              }px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {index + 1}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Resistor;
