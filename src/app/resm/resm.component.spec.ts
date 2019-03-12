import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmComponent } from './resm.component';

describe('ResmComponent', () => {
  let component: ResmComponent;
  let fixture: ComponentFixture<ResmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
