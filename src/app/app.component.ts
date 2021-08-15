import { Component } from '@angular/core';
import { Box } from './box';
import { BoardService } from './board.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public board: Array<Box> = []

    public constructor(public boardService: BoardService) {
    }

}
