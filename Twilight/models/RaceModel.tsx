export class RaceModel {

    id: number;
    name: string;
    homeWorld: string;
    expansion: boolean;

    constructor(id: number, name: string, homeWorld: string, expansion: boolean) {
        this.id = id; 
        this.name = name;
        this.homeWorld = homeWorld;
        this.expansion = expansion;
    } 


}