import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoIstruzioniComponent } from './lego-istruzioni.component';

describe('LegoIstruzioniComponent', () => {
  let component: LegoIstruzioniComponent;
  let fixture: ComponentFixture<LegoIstruzioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoIstruzioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoIstruzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
