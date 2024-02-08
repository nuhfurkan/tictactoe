import { Injectable } from '@angular/core';
import { SquareComponent } from './square/square.component';

@Injectable({
  providedIn: 'root'
})
export class TiktakaiService {
  squares: any[] = [];

  constructor() { }

  calculate(squares: SquareComponent[]) {
    this.squares = squares;

    return 9;
  }

  legalMoves(): number[] {
    var res: number[] = [];
    for (var i=0; i<9; i++) {
      if (this.squares[i] === null) {
        res.push(i);
      }
    }
    return res;
  }
}
