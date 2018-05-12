import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrotextComponent } from './introtext.component';

describe('IntrotextComponent', () => {
  let component: IntrotextComponent;
  let fixture: ComponentFixture<IntrotextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrotextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
