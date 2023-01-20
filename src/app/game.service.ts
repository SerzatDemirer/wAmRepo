import { Injectable } from '@angular/core';
import { GameStats } from 'src/app/model/gameStats';
import { Hole } from 'src/app/model/hole';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  public generateGameBoard(): Hole[] {
    //generate 25 holes
    let holes = [];
    for (let i = 0; i < 25; i++) {
      holes.push({ id: i, isThereMole: false });
    }
    return holes;
  }

  public startGame(
    holes: Hole[],
    gameStats: GameStats
  ): ReturnType<typeof setInterval> {
    const game = setInterval(() => {
      let i = Math.floor(Math.random() * 25); //creates game interval to for game loop

      let hole = holes[i];
      hole.isThereMole = true;

      setTimeout(() => {
        hole.isThereMole = false;
      }, 2000);
    }, 800);

    return game;
  }

  public startCountDown(gameStats: GameStats): ReturnType<typeof setInterval> {
    const countDown = setInterval(() => {
      gameStats.time--;
    }, 1000);

    return countDown;
  }

  public gameStatusChecker(
    game: ReturnType<typeof setInterval>,
    countDown: ReturnType<typeof setInterval>,
    gameStats: GameStats
  ) {
    const gameChecker = setInterval(() => {
      if (gameStats.time < 1) {
        this.resetGame(game, countDown, gameStats);
      }
    }, 1000);

    return gameChecker;
  }

  public resetGame(
    countDown: ReturnType<typeof setInterval>,
    game: ReturnType<typeof setInterval>,
    gameStats: GameStats
  ): void {
    clearInterval(game);
    clearInterval(countDown);

    gameStats.time = 60;
    gameStats.isStarted = false;
    gameStats.disablePlayButton = false;
  }
}
