import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    userName = '';
    constructor(private router: Router, private storage: Storage) {
    }
    ngOnInit() {

    }
    goSelfTestPage() {
        this.router.navigateByUrl('self-test');
    }
    onClick() {
        this.storageSelf();
    }
    storageSelf() {
        this.storage.get('userName').then((val) => {
            this.userName = val;
            console.log('userName:', this.userName);
            this.storage.set('currentFriendImgUrl', '../../../../assets/image/利文韡.jpg');
            this.storage.set('currentFriendName', this.userName);
        });
    }
}
