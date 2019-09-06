import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottexListComponent } from './nottex-list.component';

describe('NottexListComponent', () => {
  let component: NottexListComponent;
  let fixture: ComponentFixture<NottexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
