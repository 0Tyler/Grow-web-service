import { Component, OnInit } from '@angular/core';
import {
    ActionSheetController,
    ModalController,
    AlertController,
    Platform
} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Select } from './select';

@Component({
    selector: 'app-find-friend',
    templateUrl: './find-friend.page.html',
    styleUrls: ['./find-friend.page.scss']
})
export class FindFriendPage implements OnInit {

    shareTitle = 'Grow Send Request';
    shareUrl = 'https://grow-360.com';
    selectedLength = 0;

    selects = [
        new Select('User1'),
        new Select('User2'),
        new Select('User3'),
        new Select('User4'),
        new Select('User5'),
        new Select('User6'),
        new Select('User7'),
        new Select('User8'),
        new Select('User9')
    ];

    constructor(
        private actionSheetController: ActionSheetController,
        private modalController: ModalController,
        private alertController: AlertController,
        private socialSharing: SocialSharing,
        private platform: Platform
    ) {}

    ngOnInit() {}

    onChecked() {
        // 異步問題
        setTimeout(() => {
            this.selectedLength = this.selects.filter(
                e => e.isSelected === true
            ).length;
        });
    }

    dismiss() {
        // 關閉本頁 (modal)
        this.modalController.dismiss();
    }

    // ref: https://ionicacademy.com/ionic-social-sharing/
    async shareWith() {
        if (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone')) {
            this.shareInstagram();
        } else {
            const actionSheet = await this.actionSheetController.create({
                header: 'Share with',
                buttons: [
                    {
                        text: 'Facebook',
                        handler: () => {
                            this.shareFacebook();
                        }
                    },
                    {
                        text: 'Email',
                        handler: () => {
                            this.shareEmail();
                        }
                    },
                    {
                        text: 'Instagram',
                        handler: () => {
                            this.shareInstagram();
                        }
                    },
                    {
                        text: 'Twitter',
                        handler: () => {
                            this.shareTwitter();
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            await actionSheet.present();
        }
    }

    async shareFacebook() {
        this.socialSharing
            .shareViaFacebook('', null, this.shareUrl)
            .then(() => {
                console.log('success facebook');
            })
            .catch(e => {
                this.presentAlert('Facebook');
            });
    }
    async shareInstagram() {
        this.socialSharing
            .shareViaInstagram('', '')
            .then(() => {
                console.log('success Instagram');
            })
            .catch(e => {
                this.presentAlert('Instagram');
            });
    }
    async shareEmail() {
        this.socialSharing
            .shareViaEmail('', '', [], null, null, this.shareUrl)
            .then(() => {
                console.log('success Email');
            })
            .catch(e => {
                this.presentAlert('Email');
            });
    }
    async shareTwitter() {
        this.socialSharing
            .shareViaTwitter('', null, this.shareUrl)
            .then(() => {
                console.log('success Twitter');
            })
            .catch(e => {
                this.presentAlert('Twitter');
            });
    }

    async presentAlert(application) {
        const alert = await this.alertController.create({
            header: 'Warning',
            subHeader: `Can't share with ${application}`,
            message: 'The application is not found.',
            buttons: ['OK']
        });
        await alert.present();
    }

    sendRequest() {
        // send
    }
}
