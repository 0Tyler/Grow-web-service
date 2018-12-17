import { Friends } from './../../../interfaces/friends';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FindFriendPage } from '../../find-friend/find-friend.page';
import { Router } from '@angular/router';
@Component({
    selector: 'app-friends',
    templateUrl: 'friends.page.html',
    styleUrls: ['friends.page.scss']
})
export class FriendsPage {
    // {imgUrl:'',name:''}
    Friends: Friends[] = [
        { imgUrl: '../../../assets/image/利文韡.jpg', name: '利文韡' },
        { imgUrl: '../../../assets/image/陳柏盛.jpg', name: '陳柏盛' },
        { imgUrl: '../../../assets/image/柴犬.png', name: 'Yuki Shimizu' },
        { imgUrl: '../../../assets/image/Eduard Khachaturyan.jpg', name: 'Eduard Khachaturyan' },
        { imgUrl: '../../../../assets/image/Avedis Gevorgyan.jpg', name: 'Avedis Gevorgyan' }];

    friendsTag = 'list';
    friendsRequests: Friends[] = [
        { imgUrl: '../../../assets/image/Avedis Gevorgyan.jpg', name: 'Yusuke Shimomura' },
        { imgUrl: '../../../assets/image/陳柏盛.jpg', name: 'Yuki Shimizu' },
        { imgUrl: '../../../assets/image/柴犬.png', name: 'Kenlchiro Fujino' },
        { imgUrl: '../../../assets/image/Eduard Khachaturyan.jpg', name: 'Kenlchiro Fujino' },
        { imgUrl: '../../../assets/image/利文韡.jpg', name: '室町 俊哉' },
        { imgUrl: '../../../assets/image/陳柏盛.jpg', name: 'Momoko Abe' },
        { imgUrl: '../../../assets/image/利文韡.jpg', name: 'Hourig Hakobyan' }];
    constructor(private router: Router, private modalController: ModalController) { }

    async addFriends() {
        const modal = await this.modalController.create({
            component: FindFriendPage
        });
        return await modal.present();
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    }

    getMore() {

    }

    yesRespond(f: string) {
        this.deleteFriendsArray(f);
        this.router.navigateByUrl('questions');
        console.log('goQuestionsPage');
    }

    deleteFriendsArray(f: string) {
        const index = this.friendsRequests.findIndex(findEqual);
        if (index > -1) {
            this.friendsRequests.splice(index, 1);
        }
        function findEqual(element) {
            return element === f;
        }
    }
}
