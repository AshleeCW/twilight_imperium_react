import { RaceModel } from "./RaceModel";

export class LeaderModel {

    id: number;
    name: string;
    race: RaceModel;

    constructor(id: number, name: string, race: RaceModel) { 
        this.id = id; 
        this.name = name;
        this.race = race;

    } 


}