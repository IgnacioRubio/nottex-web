import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottexComponent } from './nottex.component';

describe('NottexComponent', () => {
  let component: NottexComponent;
  let fixture: ComponentFixture<NottexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
