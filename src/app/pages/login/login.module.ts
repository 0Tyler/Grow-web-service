import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
    MatInputModule,
    MatIconModule,
    MatButtonModule,
} from '@angular/material';

import { LoginPage } from './login.page';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule { }
