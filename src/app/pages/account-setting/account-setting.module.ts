import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountSettingPage } from './account-setting.page';
import { MatInputModule, MatSelectModule, MatIconModule, MatTabsModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: AccountSettingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatTabsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AccountSettingPage]
})
export class AccountSettingPageModule { }
