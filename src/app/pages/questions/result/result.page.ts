import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionResult } from './../../../interfaces/questionResult';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss']
})
export class ResultPage implements OnInit {
    // rangeModel: any = { lower: 11, upper: 65 };
    Results: QuestionResult[] = [
        { imgUrl: 'https://via.placeholder.com/30.png', name: 'extroversion', selfValue: 85, otherValue: 90 },
        { imgUrl: 'https://via.placeholder.com/30.png', name: 'flexibility', selfValue: 95, otherValue: 75 },
        { imgUrl: 'https://via.placeholder.com/30.png', name: 'problem setting', selfValue: 88, otherValue: 75 },
        { imgUrl: 'https://via.placeholder.com/30.png', name: 'empathy and listening skills', selfValue: 60, otherValue: 95 },
        { imgUrl: 'https://via.placeholder.com/30.png', name: 'teamwork', selfValue: 40, otherValue: 75 }
    ];
    constructor(private router: Router) { }
    ngOnInit() { }
    goTabsPage() {
        this.router.navigateByUrl('/tabs/(home:home)');
        console.log('goTabsPage');
    }
}
