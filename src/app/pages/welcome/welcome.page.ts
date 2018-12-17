import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.page.html',
    styleUrls: ['welcome.page.scss']
})
export class WelcomePage implements OnInit {
    slideOpts = {
        effect: 'flip'
    };
    constructor(private router: Router) {}

    ngOnInit() {}
    goLoginPage() {
        this.router.navigateByUrl('login');
    }
}
