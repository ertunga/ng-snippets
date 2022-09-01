import { JoinPipe } from './join.pipe';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { JoinModule } from './join.module';
import { By } from '@angular/platform-browser';

describe('JoinPipe', () => {
    describe('transform', () => {
        let pipe: JoinPipe;
        const testCases = [
            { expectation: 'should join string array', array: ['test1', 'test2', 'test3'], expected: 'test1, test2, test3' },
            {
                expectation: 'should join string array with - separator',
                array: ['test1', 'test2', 'test3'],
                separator: '-',
                expected: 'test1-test2-test3'
            },
            { expectation: 'should join number array', array: [1, -4, 100, 0], expected: '1, -4, 100, 0' },
            { expectation: 'should join number array with / separator', array: [1, -4, 100, 0], separator: '/', expected: '1/-4/100/0' },
            { expectation: 'should join empty array', array: [], expected: '' },
            { expectation: 'should join empty array with - separator', array: [], separator: '-', expected: '' }
        ];

        beforeEach(() => {
            pipe = new JoinPipe();
        });

        testCases.forEach((testCase) => {
            it(testCase.expectation, () => {
                expect(pipe.transform(testCase.array, testCase?.separator)).toBe(testCase.expected);
            });
        });
    });

    describe('integration', () => {
        @Component({
            selector: 'ngs-test-component',
            template: '<div>{{array | join}}</div>'
        })
        class TestComponent {
            array: string[] | undefined;
        }

        let fixture: ComponentFixture<TestComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({ declarations: [TestComponent], imports: [JoinModule] });
            fixture = TestBed.createComponent(TestComponent);
        });

        it(
            'should work with mutable arrays',
            waitForAsync(() => {
                const mutable = ['test1', 'test2'];
                fixture.componentInstance.array = mutable;
                fixture.detectChanges();

                const div = fixture.debugElement.query(By.css('div')).nativeElement;
                expect(div.textContent).toBe('test1, test2');

                mutable.push('test3');
                fixture.detectChanges();
                expect(div.textContent).toBe('test1, test2, test3');
            })
        );
    });
});
