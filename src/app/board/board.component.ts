import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { WinDialogComponent } from '../win-dialog/win-dialog.component';
import { WinData } from '../win-data';
import { MatDialog } from '@angular/material/dialog';
import { TiktakaiService } from '../tiktakai.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  squares: any[] = [];
  XisNext: Boolean = false; 
  winner: string | null = null;
  
  constructor(public dialog: MatDialog, private aiService: TiktakaiService) {

  }

  ngOnInit(): void {
    this.newGame();  
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.XisNext = true;
  }

  get player() {
    return this.XisNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.XisNext = !this.XisNext;
    }

    this.winner = this.calculateWinner();
    if (this.winner != null) {
      this.openDialog();
      return;
    }

    /*
    Open this part after implementation of AI

    if (this.player == 'O') {
      this.makeMove(
        this.aiService.calculate(this.squares)
      );
    }
    */
  }

  calculateWinner() {
    // check for horizontal
    for (let i = 0; i < 8; i+=3) {
      if (
        this.squares[i] &&
        this.squares[i] === this.squares[i+1] &&
        this.squares[i] === this.squares[i+2]
      ) {
        return this.squares[i];
      }
    }

    // check for vertical
    for (let i = 0; i < 3; i++) {
      if (
        this.squares[i] &&
        this.squares[i] === this.squares[i+3] &&
        this.squares[i] === this.squares[i+6]
      ) {
        return this.squares[i];
      }
    }

    // check for diagonal
    if (
      this.squares[0] &&
      this.squares[0] === this.squares[4] &&
      this.squares[0] === this.squares[8] ||
      this.squares[2] &&
      this.squares[2] === this.squares[4] &&
      this.squares[2] === this.squares[6]
    ) {
      return this.squares[4]
    }

    for (var i=0; i<9; i++) {
      if (this.squares[i] == null) {
        return null;
      }
    }

    return "full";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WinDialogComponent, {
      data: {winner: this.winner},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newGame();
    });
  }

}
