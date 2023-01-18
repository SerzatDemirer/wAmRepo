import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { GameStats } from 'src/model/gameStats';
import { Hole } from 'src/model/hole';

@Component({
  selector: 'mole-board',
  templateUrl: './moleboard.component.html',
  styleUrls: ['./moleboard.component.css'],
})
export class MoleBoardComponent implements OnInit {
  holes: Hole[];
  gameStats: GameStats;

  constructor(private gameService: GameService) {
    this.holes = [];
    this.gameStats = {
      score: 0,
      time: 60,
      isStarted: false,
      disablePlayButton: false,
    }; // Initial
  }

  ngOnInit(): void {
    this.holes = this.gameService.generateGameBoard(); // Generates the 25 Holes for the Mole board
  }

  startGame(): void {
    if (this.gameStats.isStarted === true) return; //If game started return
    this.gameStats.score = 0; // Reset the score for the new game
    let game = this.gameService.startGame(this.holes, this.gameStats); // Create game interval
    let countDown = this.gameService.startCountDown(this.gameStats); // Create countdown interval

    let gameStatusChecker = this.gameService.gameStatusChecker(
      game,
      countDown,
      this.gameStats
    ); // Create Game Status Checker Interval

    this.gameStats.isStarted = true; //If everything is succesfull then game is started
  }

  hitMole(hole: Hole): void {
    // Hits the Mole in the Hole
    if (this.gameStats.isStarted && hole.isThereMole) {
      // If game is started and hole has a mole
      hole.isThereMole = false; // Hide the mole because hit is successful
      this.gameStats.score++; // Increase the game score.
    }
  }
}
