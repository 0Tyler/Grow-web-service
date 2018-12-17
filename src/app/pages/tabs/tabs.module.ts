import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { FriendsPageModule } from './friends/friends.module';
import { AboutPageModule } from './about/about.module';
import { HomePageModule } from './home/home.module';
import { NoticePageModule } from './notice/notice.module';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        HomePageModule,
        AboutPageModule,
        FriendsPageModule,
        NoticePageModule,
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {}
