import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should load the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('StringCalculations', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should return 0 for an empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add("")).toEqual(0);
  });
});

/*
Steps of TDD Kata
1) Write a failing test
2) Write the minimum code to make your test pass
3) Refactor
*/

/*
(Just to remember here) Three laws of TDD by uncle bob
1) You are not allowed to write any production code unless it is to make a failing unit test pass. (Make initial test fail)
2) You are not allowed to write any more of unit test than is sufficient to fail. (Stop writing full test as soon as test fail)
3) You are not allowed to write any more production code than is sufficient to pass the currently failing test. 
*/