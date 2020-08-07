export class RaceModel {

    id: number;
    name: string;
    homeWorld: string;

    constructor(
            id: number = -1,
            name: string = "Federation of Sol",
            homeWorld: "Terra",
        ) { 
        this.id = id; 
        this.name = name;
        this.homeWorld = homeWorld;

    } 


}