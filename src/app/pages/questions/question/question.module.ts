import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { QuestionPage } from './question.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSliderModule, MatButtonModule } from '@angular/material';
const routes: Routes = [
    {
        path: '',
        component: QuestionPage
    }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        MatSliderModule,
        MatButtonModule
    ],
    declarations: [QuestionPage]
})
export class QuestionPageModule { }
