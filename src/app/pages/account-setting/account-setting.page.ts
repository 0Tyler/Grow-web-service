import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-account-setting',
    templateUrl: './account-setting.page.html',
    styleUrls: ['./account-setting.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AccountSettingPage implements OnInit {
    nationalities: Array<String> = [
        'American',
        'Canadian',
        'Chinese',
        'German',
        'Japen',
        'Indonesian',
        'Iranian',
        'Liechtensteiner',
        'Swiss',
        'Syrian',
        'Taiwanese'
    ];

    constructor(private router: Router) { }

    ngOnInit() { }
    complete() {
        this.router.navigateByUrl('/tabs/(home:home)');
    }
    goLoginPage() {
        this.router.navigateByUrl('/login');
    }
}
