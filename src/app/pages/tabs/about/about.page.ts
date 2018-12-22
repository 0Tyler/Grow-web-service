import { Question } from './../../../interfaces/questions';
import { QuestionsService } from './../../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: 'about.page.html',
    styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
    cards: Array<Question> = [];
    constructor(private router: Router, private questionsService: QuestionsService) { }
    ngOnInit() {
        this.getQuestions();
    }
    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    }

    goResultPage(i) {
        this.questionsService.setAnswer(this.cards[i]);
        this.router.navigateByUrl('result');
    }

    async getQuestions() {
        await this.questionsService.getQuestions()
            .subscribe(res => {
                this.cards = res;
                console.log('cards:', this.cards);
            }, err => {
                console.log(err);
            });
    }
}
