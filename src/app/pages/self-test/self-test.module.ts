import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelfTestPage } from './self-test.page';
import {DragDropModule} from '@angular/cdk/drag-drop';
const routes: Routes = [
  {
    path: '',
    component: SelfTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DragDropModule
  ],
  declarations: [SelfTestPage]
})
export class SelfTestPageModule {}
