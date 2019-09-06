import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottexAddComponent } from './nottex-add.component';

describe('NottexAddComponent', () => {
  let component: NottexAddComponent;
  let fixture: ComponentFixture<NottexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
