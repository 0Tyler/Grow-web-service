import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-self-test',
    templateUrl: './self-test.page.html',
    styleUrls: ['./self-test.page.scss']
})
export class SelfTestPage implements OnInit {
    constructor(private router: Router) {

    }
    dir = 'nothing';
    // top;
    // left;

    ngOnInit() {
        // drag event bind
        const dragSource = document.getElementById('drag-source');
        dragSource.addEventListener('touchend', this.touchend.bind(this));
    }

    async touchend(event) {
        const rectBody = document.body.getBoundingClientRect();
        const rect = event.target.getBoundingClientRect();
        const elements = document.getElementsByClassName('container');
        const rectContainer = elements.item(0).getBoundingClientRect();
        const objX = rect.x + (rect.width / 2);
        const objY = rect.y + (rect.height / 2);
        const compareX = rectBody.width / 2;
        const compareY = rectContainer.bottom;
        if (objY <= compareY) {
            this.dir = (objX > compareX) ? 'Introverted' : 'Extroverted';

            // fade-out sec is set in css
            event.target.style.opacity = 0;
            await this.sourceUpdate(event);
        } else {
        }
    }
    sourceUpdate(event) {
        setTimeout(() => {
            // const dragSource = document.getElementById('drag-source');
            // dragSource.style.position = 'absolute';

            // this.top = dragSource.offsetTop;
            // this.left = -2 * 2 * dragSource.offsetLeft;
            // console.log();
            // console.log('o top' + event.target.style.top);
            // console.log('o left' + event.target.style.left);
            // console.log('top' + this.top);
            // console.log('left' + this.left);
            // console.log('Async operation has ended');
            // event.target.style.top = this.top + 'px';
            // event.target.style.left = this.left + 'px';
            // event.target.style.opacity = 1;
            // console.log('after top' + event.target.style.top);
            // console.log('after left' + event.target.style.left);
        }, 350);
    }
    goResultPage() {
        this.router.navigateByUrl('self-test-result');
    }

}
