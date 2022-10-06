import { ClickOutsideDirective } from './click-outside.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ClickOutsideDirective', () => {
    @Component({
        template: '<div (clickOutside)="test()"></div>'
    })
    class TestComponent {
        test(): void {
            console.log('test');
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClickOutsideDirective, TestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
    });

    it('should create directive', () => {
        expect(component).toBeTruthy();
    });
});
