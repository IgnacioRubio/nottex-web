import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottexItemComponent } from './nottex-item.component';

describe('NottexItemComponent', () => {
  let component: NottexItemComponent;
  let fixture: ComponentFixture<NottexItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottexItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
