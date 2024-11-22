export class BandColor {
  constructor(
    colorHexCode,
    digit,
    multiplier,
    tolerance = null,
    temperature = null
  ) {
    this.colorHexCode = colorHexCode;
    this.digit = digit;
    this.multiplier = multiplier;
    this.tolerance = tolerance;
    this.temperature = temperature;
  }
}
