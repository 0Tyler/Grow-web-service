import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private router: Router) {
    }
    goSelfTestPage() {
        this.router.navigateByUrl('self-test');
    }
}
