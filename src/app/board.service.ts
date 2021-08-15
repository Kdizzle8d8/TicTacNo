import { Injectable } from '@angular/core';
import { Box } from './box';

@Injectable({
    providedIn: 'root'
})
export class BoardService {

    public board: Array<Box> = []
    public player: 'X' | 'O' = 'X';
    public winner: 'X' | 'O' | null;

    public constructor() {

        this.board.push({ position: 1 })
        this.board.push({ position: 2 })
        this.board.push({ position: 3 })
        this.board.push({ position: 4 })
        this.board.push({ position: 5 })
        this.board.push({ position: 6 })
        this.board.push({ position: 7 })
        this.board.push({ position: 8 })
        this.board.push({ position: 9 })

    }

    public reset() {


        for (let i = 0; i < this.board.length; i++) {

            this.board[i].player = null;

        }

        this.winner = null;
        this.player = 'X'


    }

    public switchPlayer(position: number) {
        // if (!this.board[position - 1].player) {
        if (this.player === 'X') {
            this.player = 'O'
        } else {
            this.player = 'X'
        }
        //}
    }

    public move(position: number) {


        if (!this.board[position - 1].player) {
            if (!this.winner) {

                this.board[position - 1].player = this.player
                this.checkForWin('X')
                this.checkForWin('O')


            }
        }


    }

    public checkForWin(player: 'X' | 'O') {

        if (this.board[0].player === player && this.board[1].player === player && this.board[2].player === player) {

            this.winner = player

        } else if (this.board[3].player === player && this.board[4].player === player && this.board[5].player === player) {

            this.winner = player

        } else if (this.board[6].player === player && this.board[7].player === player && this.board[8].player === player) {

            this.winner = player

        } else if (this.board[0].player === player && this.board[4].player === player && this.board[8].player === player) {

            this.winner = player

        } else if (this.board[2].player === player && this.board[4].player === player && this.board[6].player === player) {

            this.winner = player

        } else if (this.board[0].player === player && this.board[3].player === player && this.board[6].player === player) {

            this.winner = player

        } else if (this.board[1].player === player && this.board[4].player === player && this.board[7].player === player) {

            this.winner = player

        } else if (this.board[2].player === player && this.board[5].player === player && this.board[8].player === player) {

            this.winner = player

        }
    }
}
