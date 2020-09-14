import {RaceModel} from '../../models/RaceModel';
import races from '../../races/core_races.json';

export function getCoreRaceList(): RaceModel[] {
  let raceList: RaceModel[] = [];

  for (let i = 0; i < 5; i++) {
    raceList.push(
      new RaceModel(races[i], races[i].name, races[i].homeworld, races[i].image, false),
    );
  }

  return raceList;
}

export function getWinnu(): RaceModel {
  const winnu: RaceModel = new RaceModel(
    races['0'],
    races['0'].name,
    races['0'].homeworld,
    false,
  );
}
