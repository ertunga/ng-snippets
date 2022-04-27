import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockWithHeaderComponent } from './code-block-with-header.component';

describe('CodeBlockWithHeaderComponent', () => {
    let component: CodeBlockWithHeaderComponent;
    let fixture: ComponentFixture<CodeBlockWithHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CodeBlockWithHeaderComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CodeBlockWithHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
