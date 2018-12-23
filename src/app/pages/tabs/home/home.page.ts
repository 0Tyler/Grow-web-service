import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
    token = 'Name';
    private sub: any;
    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.sub = this.route.params.subscribe(params => {
        //     this.token = params['token']; // (+) converts string 'id' to a number
        //     console.log(this.token);
        //     // In a real app: dispatch action to load the details here.
        // });
        this.route.queryParams.subscribe(params => {
            this.token = params['token'];
            console.log(this.token);
        });
    }
    complete() { }
}
