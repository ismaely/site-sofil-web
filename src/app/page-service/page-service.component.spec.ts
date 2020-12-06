import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceComponent } from './page-service.component';

describe('PageServiceComponent', () => {
  let component: PageServiceComponent;
  let fixture: ComponentFixture<PageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
