import { QuestionsService } from './../../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionResult } from './../../../interfaces/questionResult';
import { Question } from './../../../interfaces/questions';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss']
})
export class ResultPage implements OnInit {
    // rangeModel: any = { lower: 11, upper: 65 };
    answer = new Question();
    Results: QuestionResult[] = [];
    QuestionsService;
    constructor(private router: Router, private questionsService: QuestionsService) { }
    ngOnInit() {
        this.answer = this.questionsService.getAnswer();
        this.Results = [
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question1', selfValue: +this.answer.question1, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question2', selfValue: +this.answer.question2, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question3', selfValue: +this.answer.question3, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question4', selfValue: +this.answer.question4, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question5', selfValue: +this.answer.question5, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question6', selfValue: +this.answer.question6, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question7', selfValue: +this.answer.question7, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question8', selfValue: +this.answer.question8, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question9', selfValue: +this.answer.question9, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question10', selfValue: +this.answer.question10, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question11', selfValue: +this.answer.question11, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Question12', selfValue: +this.answer.question12, otherValue: 2 },
        ];
    }
    goTabsPage() {
        this.router.navigateByUrl('/tabs/(home:home)');
        console.log('goTabsPage');
    }
}
