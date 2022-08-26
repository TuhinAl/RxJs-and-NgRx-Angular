import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSLearnComponent } from './rx-js-learn.component';

describe('RxJSLearnComponent', () => {
  let component: RxJSLearnComponent;
  let fixture: ComponentFixture<RxJSLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
