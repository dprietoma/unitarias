import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Component Unit', () => {
  let component: IncrementadorComponent;
  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('No debe pasar de 100 el progreso', () => {
    component.progreso = 98;

    component.cambiarValor(5);

    expect(component.progreso).toBe(100);
  });

  it('No debe bajar de 0 el progreso', () => {
    component.progreso = 2;

    component.cambiarValor(-5);

    expect(component.progreso).toBe(0);
  });
});
