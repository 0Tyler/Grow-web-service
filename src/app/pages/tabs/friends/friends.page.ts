import { Storage } from '@ionic/storage';
import { Friends } from './../../../interfaces/friends';
import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
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
        { imgUrl: '../../../assets/image/David Fogel.png', name: 'David Fogel' },
        { imgUrl: '../../../assets/image/陳柏盛.jpg', name: '陳柏盛' },
        { imgUrl: '../../../assets/image/柴犬.png', name: 'Yuki Shimizu' },
        { imgUrl: '../../../assets/image/Eduard Khachaturyan.jpg', name: 'Eduard Khachaturyan' },
        { imgUrl: '../../../../assets/image/Avedis Gevorgyan.jpg', name: 'Avedis Gevorgyan' }];

    friendsTag = 'list';
    friendsRequests: Friends[] = [
        { imgUrl: '../../../assets/image/Avedis Gevorgyan.jpg', name: 'Avedis Gevorgyan' },
        { imgUrl: '../../../assets/image/陳柏盛.jpg', name: '陳柏盛' },
        { imgUrl: '../../../assets/image/柴犬.png', name: 'Yuki Shimizu' },
        { imgUrl: '../../../assets/image/Eduard Khachaturyan.jpg', name: 'Eduard Khachaturyan' }];
    constructor(private router: Router, private modalController: ModalController, private storage: Storage, private alertController: AlertController) { }

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
    async presentAlert(f: Friends) {
        const alert = await this.alertController.create({
            header: 'You send a gift to ' + f.name,
            // subHeader: 'Subtitle',
            // message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }

    giveGift(f: Friends) {
        this.presentAlert(f);
    }
    getMore() {

    }

    yesRespond(f: Friends) {
        console.log(f);
        this.deleteFriendsArray(f);
        this.storageFriend(f);
        this.router.navigateByUrl('questions');
        console.log('goQuestionsPage');
    }

    deleteFriendsArray(f: Friends) {
        const index = this.friendsRequests.findIndex(findEqual);
        if (index > -1) {
            this.friendsRequests.splice(index, 1);
        }
        function findEqual(element) {
            return element === f;
        }
    }
    storageFriend(f: Friends) {
        this.storage.set('currentFriendImgUrl', f.imgUrl);
        this.storage.set('currentFriendName', f.name);
    }
}
