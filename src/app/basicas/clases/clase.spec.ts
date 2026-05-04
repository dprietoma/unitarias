import { Jugador } from './clase';

describe('Pruebas en la clase Jugador', () => {
  let jugador = new Jugador();

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('should create an instance', () => {
    expect(new Jugador()).toBeTruthy();
  });

  it('Debe recibir daño y reducir hp', () => {
    const hpInicial = jugador.hp;
    const danio = 30;
    const hpFinal = jugador.recibeDanio(danio);

    expect(hpFinal).toBe(hpInicial - danio);
  });

  it('Debe recibir daño y reducir hp a 0 si el daño es mayor o igual al hp', () => {
    const danio = 150;
    const hpFinal = jugador.recibeDanio(danio);

    expect(hpFinal).toBe(0);
  });
});
