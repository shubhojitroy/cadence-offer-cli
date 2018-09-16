import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegoDetailsComponent } from './rego-details.component';

describe('RegoDetailsComponent', () => {
  let component: RegoDetailsComponent;
  let fixture: ComponentFixture<RegoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
