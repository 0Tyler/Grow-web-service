import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTestPage } from './self-test.page';
describe('SelfTestPage', () => {
    let component: SelfTestPage;
    let fixture: ComponentFixture<SelfTestPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelfTestPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelfTestPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
