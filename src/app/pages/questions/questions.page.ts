import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.page.html',
    styleUrls: ['./questions.page.scss']
})
export class QuestionsPage implements OnInit {
    faArrowRight = faAngleRight;
    constructor(private router: Router) {
    }

    ngOnInit() {}
    goQuestionPage() {
        this.router.navigateByUrl('/question');
    }
}
