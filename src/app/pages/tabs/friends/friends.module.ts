import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FriendsPage } from './friends.page';

import { FindFriendPage } from './../../find-friend/find-friend.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FriendsPage }])
  ],
  // import other page -- declarations & entryComponents
  declarations: [FriendsPage, FindFriendPage],
  entryComponents: [FindFriendPage]
})
export class FriendsPageModule {}
