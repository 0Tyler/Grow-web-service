import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice',
    templateUrl: './notice.page.html',
    styleUrls: ['./notice.page.scss']
})
export class NoticePage implements OnInit {
    constructor() {}

    ngOnInit() {}

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    }
}
