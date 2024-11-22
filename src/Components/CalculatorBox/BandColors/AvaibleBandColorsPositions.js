import {
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
  GOLD,
  SILVER,
} from "./AvaibleBandColors.js";

const DIGITS_ROW = [
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
];

const MULTIPLIERS_ROW = [...DIGITS_ROW, GOLD, SILVER];

const TOLERANCE_ROW = [
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  GOLD,
  SILVER,
];

const TEMPERATURE_ROW = [
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
];

/* Se utiliza este objeto para saber los colores disponibles en cada banda, usando la primer propiedad para saber el tamaño de la resistencia (3-6) y dependiendo del tamaño cada array 
toma la posicion de una banda y tiene los colores permitidos. */

export const AVAIBLE_BAND_COLORS_POSITIONS = {
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
