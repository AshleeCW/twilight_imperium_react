import {getRaceLore} from "../screens/services/race_service";

export class RaceModel {

    id: number;
    name: string;
    homeWorld: string;
    expansion: boolean;
    image: string;

    constructor(id: number, name: string, homeWorld: string, image: string, expansion: boolean) {
        this.id = id;
        this.name = name;
        this.homeWorld = homeWorld;
        this.image = image;
        this.expansion = expansion;
    }


}
