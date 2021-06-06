import {TechModel} from '../../models/TechModel';

export function getTechList() {
  let techList: TechModel[] = [];
  techList.push(
    getPlasmaScoring(),
    getMagenDefenseGrid(),
    getDuraniumArmor(),
    getAssaultCannon(),
    getAntimassDeflectors(),
    getGravityDrive(),
    getFleetLogistics(),
    getLightWaveDeflector(),
    getSarweenTools(),
    getGravitonLaserSystem(),
    getTransitDiodes(),
    getIntegratedEconomy(),
    getNeuralMotivator(),
    getDacxiveAnimators(),
    getHyperMetabolism(),
    getX89BacterialWeapon(),
  );
}


//****************Red Tech****************
export function getPlasmaScoring(): TechModel {
  return new TechModel(
    0,
    'Plasma Scoring',
    1,
    'When 1 or more of your units use Bombardment or Space Cannon, 1 of those units may roll 1 additional die',
    0,
    0,
    0,
    0,
  );
}
export function getMagenDefenseGrid(): TechModel {
  return new TechModel(
    1,
    'Magen Defense Grid',
    1,
    'You may exhaust this card at the start of a round of ground combat on a planet that contains 1 or more of your units that have Planetary Shield; your opponent cannot make combat rolls this combat round.',
    0,
    1,
    0,
    0,
  );
}
export function getDuraniumArmor(): TechModel {
  return new TechModel(
    2,
    'Duranium Armor',
    1,
    'During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use Sustain Damage during this combat round',
    0,
    2,
    0,
    0,
  );
}
export function getAssaultCannon(): TechModel {
  return new TechModel(
    3,
    'Assault Cannon',
    1,
    'At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of their non-fighter ships',
    0,
    3,
    0,
    0,
  );
}

//****************Blue Tech****************
export function getAntimassDeflectors(): TechModel {
  return new TechModel(
    4,
    'Antimass Deflectors',
    0,
    'Your ships can move into and through asteroid fields\n' +
      'When other players’ units use SPACE CANNON against your units, apply -1 to the result of each die roll',
    0,
    0,
    0,
    0,
  );
}
export function getGravityDrive(): TechModel {
  return new TechModel(
    5,
    'Gravity Drive',
    0,
    'After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action',
    1,
    0,
    0,
    0,
  );
}
export function getFleetLogistics(): TechModel {
  return new TechModel(
    6,
    'Fleet Logistics',
    0,
    'During each of your turns of the action phase, you may perform 2 actions instead of 1',
    2,
    0,
    0,
    0,
  );
}
export function getLightWaveDeflector(): TechModel {
  return new TechModel(
    7,
    'Light/Wave Deflector',
    0,
    'Your ships can move through systems that contain other player’s ships',
    3,
    0,
    0,
    0,
  );
}
//****************Yellow Tech****************
export function getSarweenTools(): TechModel {
  return new TechModel(
    8,
    'Sarween Tools',
    2,
    'When 1 or more of your units use Production, reduce the combined cost of the produced units by 1',
    0,
    0,
    0,
    0,
  );
}
export function getGravitonLaserSystem(): TechModel {
  return new TechModel(
    9,
    'Graviton Laser System',
    2,
    'You may exhaust this card before 1 or more of your units uses Space Cannon; hits produced by those units must be assigned to non-fighter ships if able',
    0,
    0,
    1,
    0,
  );
}
export function getTransitDiodes(): TechModel {
  return new TechModel(
    10,
    'Transit Diodes',
    2,
    'You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control.',
    0,
    0,
    2,
    0,
  );
}
export function getIntegratedEconomy(): TechModel {
  return new TechModel(
    11,
    'Integrated Economy',
    2,
    'After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet’s resource value.',
    0,
    0,
    3,
    0,
  );
}
//****************Green Tech****************
export function getNeuralMotivator(): TechModel {
  return new TechModel(
    12,
    'Neural Motivator',
    3,
    'During the status phase, draw 2 action cards instead of 1.',
    0,
    0,
    0,
    0,
  );
}
export function getDacxiveAnimators(): TechModel {
  return new TechModel(
    13,
    'Dacxive Animators',
    3,
    'After you win a ground combat, you may place 1 infantry from your reinforcements on that planet',
    0,
    0,
    0,
    1,
  );
}
export function getHyperMetabolism(): TechModel {
  return new TechModel(
    14,
    'Hyper Metabolism',
    3,
    'During the status phase, gain 3 command tokens instead of 2',
    0,
    0,
    0,
    2,
  );
}
export function getX89BacterialWeapon(): TechModel {
  return new TechModel(
    15,
    'X-89 Bacterial Weapon',
    3,
    'ACTION: Exhaust this card and choose 1 planet in a system that contains 1 or more of your ships that have BOMBARDMENT; destroy all infantry on that planet',
    0,
    0,
    0,
    3,
  );
}
