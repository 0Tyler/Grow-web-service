import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    // public isTabShowed = true;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    // public tabToggle(e) {
    //     const target = e.target.className;
    //     // 點選地方所包含的class名稱
    //     console.log(target);
    //     // 要類似的方式可用 || target.includes('輸入classname') 加入
    //     if (target.includes('in-item')) {
    //         document.getElementById('dashboard-tab-bar').style.display = 'none';
    //         this.isTabShowed = false;
    //     } else {
    //         setTimeout(() => {
    //             document.getElementById('dashboard-tab-bar').style.display = '';
    //             this.isTabShowed = true;
    //         }, 250);
    //     }
    // }
}
