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
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Mechanical aptitude', selfValue: +this.answer.question1, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Scientific skills', selfValue: +this.answer.question2, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Artistic ability', selfValue: +this.answer.question3, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Teaching skills', selfValue: +this.answer.question4, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Sales skills', selfValue: +this.answer.question5, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Organizational skills', selfValue: +this.answer.question6, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Operational ability', selfValue: +this.answer.question7, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Mathematical ability', selfValue: +this.answer.question8, otherValue: 4 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Musical ability', selfValue: +this.answer.question9, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Understanding others', selfValue: +this.answer.question10, otherValue: 2 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Management skills', selfValue: +this.answer.question11, otherValue: 3 },
            { imgUrl: 'https://via.placeholder.com/30.png', name: 'Writing skills', selfValue: +this.answer.question12, otherValue: 2 },
        ];
    }
    goTabsPage() {
        // this.router.navigateByUrl('/tabs/(home:home)');
        // console.log('goTabsPage');
    }
    goAboutResult() {
        this.router.navigateByUrl('about-result');
    }
}
