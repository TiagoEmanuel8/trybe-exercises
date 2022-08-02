import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _enemyPlayer: Fighter;

  constructor(player1: Fighter, enemyPlayer: Fighter) {
    super(player1);
    this._enemyPlayer = enemyPlayer;
  }

  // the fight must perdure until the player or the enemy player is dead
  public fight(): number {
    let anyoneAlive = true;
    while (anyoneAlive) {
      this._enemyPlayer.attack(this.player);
      if (this.player.lifePoints === -1) {
        anyoneAlive = false;
        return -1;
      }
      this.player.attack(this._enemyPlayer);
      if (this._enemyPlayer.lifePoints === -1) {
        anyoneAlive = false;
        return 1;
      }
    }
    return 0;
  }
}
