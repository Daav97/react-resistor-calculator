import "./Explanation.css";

export const Explanation = ({ bands }) => {
  let digitsCount;
  switch (bands.length) {
    case 3:
    case 4:
      digitsCount = 2;
      break;
    case 5:
    case 6:
      digitsCount = 3;
      break;
  }

  const hasTolerance = bands.length >= 4;
  const hasTemperature = bands.length >= 6;

  const obtainValue = (b, idx) => {
    //Dependiendo de qué posición de banda sea y de que cantidad de bandas haya, se regresa el valor correspondiente.
    switch (idx) {
      case 0:
      case 1:
        return b.digit;
      case 2:
        if (bands.length <= 4) {
          return "x" + b.multiplier;
        }
        return b.digit;
      case 3:
        if (bands.length === 4) {
          return b.tolerance + "%";
        }
        return "x" + b.multiplier;
      case 4:
        return b.tolerance + "%";
      case 5:
        return b.temperature;
    }
  };

  return (
    <div className="main-container">
      <p
        className="columnHeader"
        style={{ gridColumn: `1 / ${digitsCount + 1}` }}
      >
        Digitos
      </p>
      <p className="columnHeader" style={{ gridColumn: digitsCount + 1 }}>
        Multiplicador
      </p>
      {hasTolerance && (
        <p className="columnHeader" style={{ gridColumn: digitsCount + 2 }}>
          Tolerancia
        </p>
      )}
      {hasTemperature && (
        <p className="columnHeader" style={{ gridColumn: digitsCount + 3 }}>
          Temperatura
        </p>
      )}

      {bands.map((b, idx) => (
        <p style={{ gridColumn: idx + 1, color: b.colorHexCode }}>
          {obtainValue(b, idx)}
        </p>
      ))}
    </div>
  );
};
export default Explanation;
