import { AVAIBLE_BAND_COLORS_POSITIONS } from "./BandColors/AvaibleBandColorsPositions.js";

export const calculateResistorValues = (bands) => {
  const values = {};

  switch (bands.length) {
    case 3:
      values.digits = [bands[0], bands[1]];
      values.multiplier = bands[2];
      break;
    case 4:
      values.digits = [bands[0], bands[1]];
      values.multiplier = bands[2];
      values.tolerance = bands[3];
      break;
    case 5:
      values.digits = [bands[0], bands[1], bands[2]];
      values.multiplier = bands[3];
      values.tolerance = bands[4];
      break;
    case 6:
      values.digits = [bands[0], bands[1], bands[2]];
      values.multiplier = bands[3];
      values.tolerance = bands[4];
      values.temp = bands[5];
      break;
    default:
      return;
  }

  values.total =
    parseInt(values.digits.map((v) => v.digit).join("")) *
    values.multiplier.multiplier;

  return values;
};

export const convertToShortScale = (number) => {
  const SCALES = {
    "": 1,
    k: 1000,
    M: 1000000,
    G: 1000000000,
  };

  // Iteramos sobre las escalas para encontrar el sufijo adecuado
  for (let scale in SCALES) {
    if (number < SCALES[scale] * 1000) {
      const scaledNumber = number / SCALES[scale];

      // Comprobamos si el número tiene más de 4 decimales
      const numberOfDecimals =
        scaledNumber.toString().split(".")[1]?.length || 0;

      // Si tiene más de 4 decimales, usamos toFixed(2) para mostrar dos decimales
      if (numberOfDecimals > 4) {
        return `${scaledNumber.toFixed(2)} ${scale}`;
      }

      // Si no, devolvemos el número sin .toFixed
      return `${scaledNumber} ${scale}`;
    }
  }

  // Si el número es extremadamente grande, lo devolvemos sin sufijo
  return number + " ";
};

// Método para validar que los valores elegidos previamente estén en una posición válida acorde al nuevo número de bandas.
/*Ejemplos: 
  - Con 3 bandas, la 3° podía ser dorada/plata pero con 5 bandas no.
  - Con 5 bandas, la 4° podía ser negra pero con 4 no.
  */
export const validateBandPositions = (bands, newBandsCount) => {
  return bands.map((band, index) => {
    return AVAIBLE_BAND_COLORS_POSITIONS[newBandsCount][index].includes(band)
      ? band
      : AVAIBLE_BAND_COLORS_POSITIONS[newBandsCount][index][0];
  });
};
