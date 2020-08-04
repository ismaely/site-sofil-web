import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCorpoComponent } from './app-corpo.component';

describe('AppCorpoComponent', () => {
  let component: AppCorpoComponent;
  let fixture: ComponentFixture<AppCorpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCorpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
