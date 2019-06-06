import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInputScreenComponent } from './ng-input-screen.component';

describe('NgInputScreenComponent', () => {
  let component: NgInputScreenComponent;
  let fixture: ComponentFixture<NgInputScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgInputScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
