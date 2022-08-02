import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Elf, Orc } from './Races';
import Mage from './Archetypes/Mage';
import Halfling from './Races/Halfling';
import { Ranger, Warrior } from './Archetypes';

// PLAYERS
const player1 = new Character(
  'player1',
  new Elf('player1', 10),
  new Mage('player1'),
);
const player2 = new Character(
  'player2',
  new Halfling('player2', 15),
  new Warrior('player2'),
);
const player3 = new Character(
  'player3',
  new Orc('player3', 15),
  new Ranger('player3'),
);

// Player1 upa 11 níveis
const levels = 11;
for (let i = 0; i < levels; i += 1) {
  player1.levelUp();
}

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// PVP
const pvp = new PVP(player2, player3);

// PVE
const pve = new PVE(player1, [monster1, monster2]);

// BATTLES
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};