import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardscreenComponent } from './leaderboardscreen.component';

describe('LeaderboardscreenComponent', () => {
  let component: LeaderboardscreenComponent;
  let fixture: ComponentFixture<LeaderboardscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
