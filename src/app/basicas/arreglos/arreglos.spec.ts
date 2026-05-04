import { usuario } from './arreglos';

describe('Pruebas de arreglos', () => {


  it('Debe retornar un arreglo', () => {
    const resultado = usuario();
    expect(Array.isArray(resultado)).toBe(true);
  });

  it('Debe retornar un arreglo con 3 elementos o mas elementos', () => {
    const resultado = usuario();
    expect(resultado.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe retornar un arreglo con el nombre David', () => {
    const resultado = usuario();
    expect(resultado[0].PrimerNombre).toBe('David');
  });
  
});
