import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSnippetsComponent } from './ng-snippets.component';

describe('NgSnippetsComponent', () => {
  let component: NgSnippetsComponent;
  let fixture: ComponentFixture<NgSnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSnippetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
