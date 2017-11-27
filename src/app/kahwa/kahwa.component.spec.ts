import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KahwaComponent } from './kahwa.component';

describe('KahwaComponent', () => {
  let component: KahwaComponent;
  let fixture: ComponentFixture<KahwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
