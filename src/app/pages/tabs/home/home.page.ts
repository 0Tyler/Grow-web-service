import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    // custom material style
    // encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
    nationalities: Array<String> = [
        'American',
        'Canadian',
        'Chinese',
        'German',
        'Indonesian',
        'Iranian',
        'Liechtensteiner',
        'Swiss',
        'Syrian',
        'Taiwanese'
    ];

    constructor() {}

    ngOnInit() {}
    complete() {}
}
