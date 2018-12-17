import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutPage } from './about/about.page';
import { FriendsPage } from './friends/friends.page';
import { HomePage } from './home/home.page';
import { NoticePage } from './notice/notice.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'tabs/(home:home)',
                pathMatch: 'full'
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage,

            },
            {
                path: 'about',
                outlet: 'about',
                component: AboutPage
            },
            {
                path: 'friends',
                outlet: 'friends',
                component: FriendsPage
            },
            {
                path: 'notice',
                outlet: 'notice',
                component: NoticePage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
