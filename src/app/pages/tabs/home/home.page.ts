import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage';
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
    constructor(private router: Router, private route: ActivatedRoute, private storage: Storage) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['token'] != null) {
                this.token = params['token'];
            }
        });
        this.storage.set('userName', this.token);
        console.log('home set userName', this.token);
    }
    complete() { }
}
