import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecMainComponent } from './sec-main.component';

describe('SecMainComponent', () => {
  let component: SecMainComponent;
  let fixture: ComponentFixture<SecMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
