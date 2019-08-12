import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TabSignaturePage} from './tab-signature.page';

describe('Tab3Page', () => {
    let component: TabSignaturePage;
    let fixture: ComponentFixture<TabSignaturePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TabSignaturePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabSignaturePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
