import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarInfomacoesComponent } from './alterar-infomacoes.component';

describe('AlterarInfomacoesComponent', () => {
  let component: AlterarInfomacoesComponent;
  let fixture: ComponentFixture<AlterarInfomacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarInfomacoesComponent]
    });
    fixture = TestBed.createComponent(AlterarInfomacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
