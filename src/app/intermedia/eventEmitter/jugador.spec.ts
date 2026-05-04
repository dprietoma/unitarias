import { Jugador2 } from './jugador2';

describe('Pruebas en la clase Jugador2', () => {
  let jugador = new Jugador2();

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('should create an instance', () => {
    expect(new Jugador2()).toBeTruthy();
  });

  it('Debe emitir un evento al recibir daño', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => (nuevoHp = hp));

    const danio = 30;
    jugador.recibeDanio(danio);
    expect(nuevoHp).toBe(70);
  });

  it('Debe emitir un evento al recibir daño mortal', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => (nuevoHp = hp));
    const danio = 150;
    jugador.recibeDanio(danio);
    expect(nuevoHp).toBe(0);
  });
});
