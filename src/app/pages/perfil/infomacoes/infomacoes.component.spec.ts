import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomacoesComponent } from './infomacoes.component';

describe('InfomacoesComponent', () => {
  let component: InfomacoesComponent;
  let fixture: ComponentFixture<InfomacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfomacoesComponent]
    });
    fixture = TestBed.createComponent(InfomacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
