export class BandColor {
  constructor(
    name,
    colorHexCode,
    digit,
    multiplier,
    tolerance = null,
    temperature = null
  ) {
    this.name = name;
    this.colorHexCode = colorHexCode;
    this.digit = digit;
    this.multiplier = multiplier;
    this.tolerance = tolerance;
    this.temperature = temperature;
  }
}
