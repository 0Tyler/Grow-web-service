import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../../../services/questions.service';
@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
    result;
    userName = '';

    constructor(private router: Router, private questionsService: QuestionsService, private storage: Storage) { }
    ngOnInit() {
        // this.storage.get('userName').then((val) => {
        //     this.userName = val;
        //     console.log('userName:', this.userName);
        //     this.getResult(this.userName);
        // });
        this.getResult('strusername');
    }


    goTabsPage() {
        this.router.navigateByUrl('/tabs/(home:home)');
        console.log('goTabsPage');
    }
    async getResult(username: String) {
        await this.questionsService.getResult(username)
            .subscribe(res => {
                console.log('res:', res);
                this.result = res.result;
            }, err => {
                console.log(err);
            });
    }
}
