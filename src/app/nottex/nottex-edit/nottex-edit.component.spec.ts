import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottexEditComponent } from './nottex-edit.component';

describe('NottexEditComponent', () => {
  let component: NottexEditComponent;
  let fixture: ComponentFixture<NottexEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottexEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
