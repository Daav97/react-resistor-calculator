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

  //Función para determinar el estilo de la banda seleccionada
  const getBandStyle = (index) => {
    if (index === selectedBand) {
      return {
        stroke: "#12d7ff",
        strokeWidth: 0.1,
        filter: "drop-shadow(0px 0px 6px #12d7ff)",
      };
    }
    return {};
  };

  return (
    <svg
      width={containerWidth}
      height={containerHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        border: "1px solid #ccc",
        boxSizing: "border-box",
        backgroundColor: "#e6e6e6",
        borderRadius: "7px",
        maxWidth: 300,
        width: 300,
      }}
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
          style={{ cursor: "pointer" }}
        >
          {/* Banda de color */}
          <rect
            x={bandsStartX + index * (bandWidth + bandSpacing)}
            y={bandsY}
            width={bandWidth}
            height={bandHeight}
            fill={color}
            {...getBandStyle(index)}
          />
          {/* Número de la banda */}
          <text
            x={bandsStartX + index * (bandWidth + bandSpacing) + bandWidth / 2}
            y={bandsY + bandHeight / 2 + bandTextSize / 3}
            fontSize={bandTextSize}
            textAnchor="middle"
            fill="#ffffff"
            style={{ userSelect: "none" }}
          >
            {index + 1}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Resistor;
