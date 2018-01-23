import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulacaoDomComponent } from './manipulacao-dom.component';

describe('ManipulacaoDomComponent', () => {
  let component: ManipulacaoDomComponent;
  let fixture: ComponentFixture<ManipulacaoDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulacaoDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulacaoDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
