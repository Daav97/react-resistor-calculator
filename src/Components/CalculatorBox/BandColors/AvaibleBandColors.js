import { BandColor } from "./BandColor.js";
import {
  BLACK,
  BLUE,
  BROWN,
  GOLD,
  GREEN,
  GREY,
  ORANGE,
  RED,
  SILVER,
  VIOLET,
  WHITE,
  YELLOW,
} from "./HexColors.js";

export const BLACK_BAND = new BandColor(BLACK, 0, 1);
export const BROWN_BAND = new BandColor(BROWN, 1, 10, 1, 100);
export const RED_BAND = new BandColor(RED, 2, 100, 2, 50);
export const ORANGE_BAND = new BandColor(ORANGE, 3, 1000, 3, 15);
export const YELLOW_BAND = new BandColor(YELLOW, 4, 10000, 4, 25);
export const GREEN_BAND = new BandColor(GREEN, 5, 100000, 0.5, 20);
export const BLUE_BAND = new BandColor(BLUE, 6, 1000000, 0.25, 10);
export const VIOLET_BAND = new BandColor(VIOLET, 7, 10000000, 0.1, 5);
export const GREY_BAND = new BandColor(GREY, 8, 100000000, 0.05, 1);
export const WHITE_BAND = new BandColor(WHITE, 9, 1000000000);
export const GOLD_BAND = new BandColor(GOLD, null, 0.1, 5);
export const SILVER_BAND = new BandColor(SILVER, null, 0.01, 10);

/* Nota: Algunas fuentes usan diferentes valores para la tolerancia.
- Algunas no usan Naranja ni amarillo
- Otras indican que naranja es 3% y amarillo 4% y otras indican 0.05% y 0.02%
- Algunas marcan el gris como 0.05% y otras como 0.01% 
*/

/* Referencias: 
- https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_colores
- https://en.wikipedia.org/wiki/Electronic_color_code
- https://www.calculator.net/resistor-calculator.html
- https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code
- https://www.allaboutcircuits.com/tools/resistor-color-code-calculator/
*/
