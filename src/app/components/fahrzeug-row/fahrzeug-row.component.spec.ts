import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugRowComponent } from './fahrzeug-row.component';

describe('FahrzeugRowComponent', () => {
  let component: FahrzeugRowComponent;
  let fixture: ComponentFixture<FahrzeugRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
