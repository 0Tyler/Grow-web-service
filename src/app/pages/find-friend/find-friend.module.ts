import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule, MatBadgeModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { FindFriendPage } from './find-friend.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

const routes: Routes = [
    {
        path: '',
        component: FindFriendPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatListModule,
        MatBadgeModule,
        RouterModule.forChild(routes)
    ],
    declarations: [FindFriendPage],
    providers: [SocialSharing]
})
export class FindFriendPageModule {}
