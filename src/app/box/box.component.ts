import { Component, Input } from '@angular/core';
import { Box } from '../box';
import { BoardService } from '../board.service';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: [ './box.component.scss' ]
})
export class BoxComponent {

    @Input() public box: Box

    @Input() public player: 'X' | 'O'

    public constructor(private boardserice: BoardService) {


    }

    public onClick() {


        if (!this.box.player) {

            this.boardserice.move(this.box.position)
            this.boardserice.switchPlayer(this.box.position)

        }

    }
}
