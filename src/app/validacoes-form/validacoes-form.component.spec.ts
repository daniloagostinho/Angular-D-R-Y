import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacoesFormComponent } from './validacoes-form.component';

describe('ValidacoesFormComponent', () => {
  let component: ValidacoesFormComponent;
  let fixture: ComponentFixture<ValidacoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
