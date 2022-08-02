import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemyMonsters: (SimpleFighter | Fighter)[];
  constructor(player1: Fighter, enemyMonsters: (SimpleFighter | Fighter)[]) {
    super(player1);
    this._enemyMonsters = enemyMonsters;
  }

  public fight(): number {
    let anyoneAlive = true;
    while (anyoneAlive) {
      this._enemyMonsters
        .forEach((enemyMonster) => { enemyMonster.attack(this.player); });
      if (this.player.lifePoints === -1) {
        anyoneAlive = false;
        return -1;
      }
      this._enemyMonsters
        .forEach((enemyMonster) => { this.player.attack(enemyMonster); });
      if (this._enemyMonsters
        .every((enemyMonster) => enemyMonster.lifePoints === -1)) {
        anyoneAlive = false;
        return 1;
      }
    }
    return 0;
  }
}