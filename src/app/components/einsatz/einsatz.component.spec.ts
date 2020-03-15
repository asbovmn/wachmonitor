import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsatzComponent } from './einsatz.component';

describe('EinsatzComponent', () => {
  let component: EinsatzComponent;
  let fixture: ComponentFixture<EinsatzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinsatzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinsatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
