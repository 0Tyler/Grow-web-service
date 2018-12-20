import { QuestionsService } from './../../../services/questions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { faQuora } from '@fortawesome/free-brands-svg-icons';
import { Question } from './../../../interfaces/questions';
@Component({
    selector: 'app-question',
    templateUrl: './question.page.html',
    styleUrls: ['./question.page.scss']
})
export class QuestionPage implements OnInit {
    // post Url
    url = 'http://192.168.2.46:8080/finish';
    // Icon
    faQuora = faQuora;
    // Content
    content = 'Please select one of these values.';
    // Slider attribute
    autoTicks = false;
    invert = false;
    max = 4;
    min = 1;
    showTicks = true;
    step = 1;
    thumbLabel = true;
    value: number | 'auto' = 2.5;
    vertical = false;
    // Questions data
    questions: Array<String> = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
    questionTitle: String = this.questions[0];
    questionIndex = 0;
    answer = new Question();

    get tickInterval(): number | 'auto' {
        return this.showTicks
            ? this.autoTicks
                ? 'auto'
                : this._tickInterval
            : 0;
    }
    set tickInterval(value) {
        this.value = value;
        this._tickInterval = coerceNumberProperty(value);
    }

    private _tickInterval = 1;
    constructor(private router: Router, private questionsService: QuestionsService) {
    }


    ngOnInit() {
        this.answer.Qname = 'strQname';
        this.answer.Qdescrib = 'strQdescrib';
        this.answer.username = 'strusername';
    }


    goResultPage() {
        if (this.isSelect()) {
            console.log('goResultPage');
            this.router.navigateByUrl('/result');
        }
    }
    goNext() {
        // recode value
        switch (this.questionIndex) {
            case 0:
                this.answer.question1 = String(this.value);
                break;
            case 1:
                this.answer.question2 = String(this.value);
                break;
            case 2:
                this.answer.question3 = String(this.value);
                break;
            case 3:
                this.answer.question4 = String(this.value);
                break;
            case 4:
                this.answer.question5 = String(this.value);
                break;
            case 5:
                this.answer.question6 = String(this.value);
                break;
            case 6:
                this.answer.question7 = String(this.value);
                break;
            case 7:
                this.answer.question8 = String(this.value);
                break;
            case 8:
                this.answer.question9 = String(this.value);
                break;
            case 9:
                this.answer.question10 = String(this.value);
                break;
            case 10:
                this.answer.question11 = String(this.value);
                break;
            case 11:
                this.answer.question12 = String(this.value);
                break;
            default:
                console.log('no question');
                break;
        }
        console.log(this.answer);

        // render page
        this.questionIndex += 1;
        if (this.questionIndex < this.questions.length) {
            this.questionTitle = this.questions[this.questionIndex];
        } else {
            this.goResultPage();
            this.addQuestion();
        }
        this.value = 2.5;
    }

    isSelect() {
        return this.value !== 2.5;
    }
    onInputChange(e) {
        switch (this.value) {
            case 1:
                this.content = 'Content 1';
                break;
            case 2:
                this.content = 'Content 2';
                break;
            case 3:
                this.content = 'Content 3';
                break;
            case 4:
                this.content = 'S/he understand the logic in any argument and can point out the illogical leap or contradictions as well as ask questions';
                break;
            default:
                break;
        }
    }


    // async getQuestions() {
    //     await this.questionsService.getQuestions()
    //         .subscribe(res => {
    //             console.log(res);
    //             this.questions = res[0];
    //             this.question = this.questions.question1;
    //         }, err => {
    //             console.log(err);
    //         });
    // }
    addQuestion() {
        const formdata = new FormData;
        formdata.append('username', this.answer.username);
        formdata.append('Qname', this.answer.Qname);
        formdata.append('Qdescrib', this.answer.Qdescrib);
        formdata.append('question1', this.answer.question1);
        formdata.append('question2', this.answer.question2);
        formdata.append('question3', this.answer.question3);
        formdata.append('question4', this.answer.question4);
        formdata.append('question5', this.answer.question5);
        formdata.append('question6', this.answer.question6);
        formdata.append('question7', this.answer.question7);
        formdata.append('question8', this.answer.question8);
        formdata.append('question9', this.answer.question9);
        formdata.append('question10', this.answer.question10);
        formdata.append('question11', this.answer.question11);
        formdata.append('question12', this.answer.question12);

        this.questionsService.addQuestion(this.url, formdata)
            .subscribe(
                data => console.log('Success: ', data),
                error => console.error('Error: ', error)
            );
    }
}
