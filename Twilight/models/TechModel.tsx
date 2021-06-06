enum tech {
  BLUE,
  RED,
  YELLOW,
  GREEN,
}

export class TechModel {
  id: number;
  name: string;
  colour: tech;
  description: string;
  preBlue: number;
  preRed: number;
  preYellow:number;
  preGreen:number;

  constructor(
    id: number,
    name: string,
    colour: tech,
    description: string,
    preBlue: number,
    preRed: number,
    preYellow: number,
    preGreen: number,
  ) {
    this.id = id;
    this.name = name;
    this.colour = colour;
    this.description = description;
    this.preBlue = preBlue;
    this.preRed = preRed;
    this.preYellow = preYellow;
    this.preGreen = preGreen;
  }
}
