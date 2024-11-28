import {
  BLACK_BAND,
  BROWN_BAND,
  RED_BAND,
  ORANGE_BAND,
  YELLOW_BAND,
  GREEN_BAND,
  BLUE_BAND,
  VIOLET_BAND,
  GREY_BAND,
  WHITE_BAND,
  GOLD_BAND,
  SILVER_BAND,
} from "./AvailableBandColors.js";

const DIGITS_ROW = [
  BLACK_BAND,
  BROWN_BAND,
  RED_BAND,
  ORANGE_BAND,
  YELLOW_BAND,
  GREEN_BAND,
  BLUE_BAND,
  VIOLET_BAND,
  GREY_BAND,
  WHITE_BAND,
];

const MULTIPLIERS_ROW = [...DIGITS_ROW, GOLD_BAND, SILVER_BAND];

const TOLERANCE_ROW = [
  BROWN_BAND,
  RED_BAND,
  ORANGE_BAND,
  YELLOW_BAND,
  GREEN_BAND,
  BLUE_BAND,
  VIOLET_BAND,
  GREY_BAND,
  GOLD_BAND,
  SILVER_BAND,
];

const TEMPERATURE_ROW = [
  BLACK_BAND,
  BROWN_BAND,
  RED_BAND,
  ORANGE_BAND,
  YELLOW_BAND,
  GREEN_BAND,
  BLUE_BAND,
  VIOLET_BAND,
  GREY_BAND,
];

/* Se utiliza este objeto para saber los colores disponibles en cada banda, usando la primer propiedad para saber el tamaño de la resistencia (3-6) y dependiendo del tamaño cada array 
toma la posicion de una banda y tiene los colores permitidos. */

export const AVAILABLE_BAND_COLORS_POSITIONS = {
  3: [DIGITS_ROW, DIGITS_ROW, MULTIPLIERS_ROW],
  4: [DIGITS_ROW, DIGITS_ROW, MULTIPLIERS_ROW, TOLERANCE_ROW],
  5: [DIGITS_ROW, DIGITS_ROW, DIGITS_ROW, MULTIPLIERS_ROW, TOLERANCE_ROW],
  6: [
    DIGITS_ROW,
    DIGITS_ROW,
    DIGITS_ROW,
    MULTIPLIERS_ROW,
    TOLERANCE_ROW,
    TEMPERATURE_ROW,
  ],
};
