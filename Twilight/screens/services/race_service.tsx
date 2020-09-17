import {RaceModel} from '../../models/RaceModel';

//Function for the vanilla races
export function getCoreRaceList(): RaceModel[] {
  let raceList: RaceModel[] = [];
  raceList.push(
    getWinnu(),
    getArborec(),
    getYin(),
    getMuaat(),
    getCreuss(),
    getHacan(),
    getJolnar(),
    getL1z1x(),
    getLetnev(),
    getMentak(),
    getNaalu(),
    getNekro(),
    getSaar(),
    getSardakk(),
    getSol(),
    getXxcha(),
    getYssaril(),
  );

  return raceList;
}

export function getNumberOfRandomRaces(): {
  // will need to take in number of players, will need a copy of the racelist depending on whether or not the expansion
  // is being used. Then randomise this list and return array of whatever number.
};

// Function for the expansion races
export function getPoKRaces(): RaceModel[] {
  let raceList: RaceModel[] = [];
}

export function getRaceByID(id: number): RaceModel {
  let raceList: RaceModel[] = getCoreRaceList();
  for (let i = 0; i < raceList.length; i++) {
    if (raceList[i].id === id) {
      return raceList[i];
    }
  }
  return new RaceModel(-1, 'null', 'null', '', false);
}

export function getWinnu(): RaceModel {
  return new RaceModel(
    0,
    'The Winnu',
    'Winnu',
    require('../../assets/winnu.png'),
    false,
  );
}
export function getArborec(): RaceModel {
  return new RaceModel(
    1,
    'The Arborec',
    'Farruban',
    require('../../assets/arborec.png'),
    false,
  );
}
export function getYin(): RaceModel {
  return new RaceModel(
    2,
    'The Yin Brotherhood',
    'Lael',
    require('../../races/images/yin.png'),
    false,
  );
}
export function getMuaat(): RaceModel {
  return new RaceModel(
    3,
    'The Embers of Muaat',
    'Muaat',
    require('../../races/images/muaat.png'),
    false,
  );
}
export function getCreuss(): RaceModel {
  return new RaceModel(
    4,
    'The Ghosts of Creuss',
    'Delta wormhole',
    require('../../races/images/creuss.png'),
    false,
  );
}
export function getHacan(): RaceModel {
  return new RaceModel(
    5,
    'The Emirates of Hacan',
    'Arretze, Hercant, Kamdorn',
    require('../../races/images/hacan.png'),
    false,
  );
}
export function getJolnar(): RaceModel {
  return new RaceModel(
    6,
    'The Universities of Jol-Nar',
    'Jol, Nar',
    require('../../races/images/jolnar.png'),
    false,
  );
}
export function getL1z1x(): RaceModel {
  return new RaceModel(
    7,
    'The L1Z1X Mindnet',
    '[0.0.0]',
    require('../../races/images/l1z1x.png'),
    false,
  );
}
export function getLetnev(): RaceModel {
  return new RaceModel(
    8,
    'The Barony of Letnev',
    'Arc Prime, Wren Terra',
    require('../../races/images/letnev.png'),
    false,
  );
}
export function getMentak(): RaceModel {
  return new RaceModel(
    9,
    'The Mentak Coalition',
    'Moll Primus',
    require('../../races/images/mentak.png'),
    false,
  );
}
export function getNaalu(): RaceModel {
  return new RaceModel(
    10,
    'The Naalu Collective',
    'Maaluuk, Druua',
    require('../../races/images/naalu.png'),
    false,
  );
}
export function getNekro(): RaceModel {
  return new RaceModel(
    11,
    'The Nekro Virus',
    'Mordai II',
    require('../../races/images/nekro.png'),
    false,
  );
}
export function getSaar(): RaceModel {
  return new RaceModel(
    12,
    'The Clan of Saar',
    'Lisis II, Ragh',
    require('../../races/images/saar.png'),
    false,
  );
}
export function getSardakk(): RaceModel {
  return new RaceModel(
    13,
    'The Sardakk Noir',
    "Tren'lak, Quinarra",
    require('../../races/images/sardakk.png'),
    false,
  );
}
export function getSol(): RaceModel {
  return new RaceModel(
    14,
    'The Federation of Sol',
    'Jord',
    require('../../races/images/sol.png'),
    false,
  );
}
export function getXxcha(): RaceModel {
  return new RaceModel(
    15,
    'The Xxcha Kingdom',
    'Archon Ren, Archon Tau',
    require('../../races/images/xxcha.png'),
    false,
  );
}
export function getYssaril(): RaceModel {
  return new RaceModel(
    16,
    'The Yssaril Tribes',
    'Retillion, Shalloq',
    require('../../races/images/yssaril.png'),
    false,
  );
}
