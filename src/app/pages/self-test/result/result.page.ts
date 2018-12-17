import { Component, OnInit } from '@angular/core';
import { store } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { SelfTestResult } from '../../../interfaces/selfTestResult';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    traits: SelfTestResult[] = [
        {
            imgUrl: '../../../../assets/image/Extraverts-Introverts.PNG', name: 'Extraverts - introverts', status: 'Complete'
        },
        { imgUrl: '../../../../assets/image/Curious-Cautious.PNG', name: 'Curious - Cautious', status: 'Complete' },
        { imgUrl: '../../../../assets/image/Sensitive-Confident.PNG', name: 'Sensitive - Confident', status: 'Complete' },
        { imgUrl: '../../../../assets/image/Compassionate-Independant.PNG', name: 'Compassionate - Independant', status: 'Complete' },
        { imgUrl: '../../../../assets/image/Organized-Spontaneous.PNG', name: 'Organized - Spontaneous', status: 'Complete' }
    ];
    constructor(private router: Router) { }

    ngOnInit() { }
    goTabsPage() {
        this.router.navigateByUrl('/tabs/(home:home)');
        console.log('goTabsPage');
    }
    goResultPage() {
        this.router.navigateByUrl('/self-test');
        console.log('goSelfTestPage');
    }
}
