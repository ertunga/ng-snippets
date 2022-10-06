import { ClickOutsideDirective } from './click-outside.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ClickOutsideDirective', () => {
    @Component({
        template: `
            <div (clickOutside)="test()" class="target"></div>
            <div class="outside"></div>
        `
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

    it('should handle click on target correctly', () => {
        spyOn(component, 'test');
        fixture.detectChanges();

        const target = fixture.debugElement.query(By.css('.target')).nativeElement;
        target.click();

        expect(component.test).not.toHaveBeenCalled();
    });

    it('should handle click outside correctly', () => {
        spyOn(component, 'test');
        fixture.detectChanges();

        const target = fixture.debugElement.query(By.css('.outside')).nativeElement;
        target.click();

        expect(component.test).toHaveBeenCalled();
    });
});
