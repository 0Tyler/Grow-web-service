import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { faQuora } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-question',
    templateUrl: './question.page.html',
    styleUrls: ['./question.page.scss']
})
export class QuestionPage implements OnInit {
    // Icon
    faQuora = faQuora;
    // Content
    content;
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
    constructor(private router: Router) { }

    ngOnInit() {
        this.value = 2.5;
        this.content = 'Please select one of these values.';
    }

    goResultPage() {
        if (this.isSelect()) {
            console.log('goResultPage');
            this.router.navigateByUrl('/result');
        }
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
}
