import { incrementar } from "./numeros";


describe ('Pruebas de numeros', () => {
    it('Debe retornar un numero', () => {
        const numero = 5;
        const resultado = incrementar(numero);
        expect( typeof resultado).toBe('number');
    }); 

    it('Debe retornar el numero incrementado en 1', () => {
        const numero = 5;
        const resultado = incrementar(numero);
        expect(resultado).toBe(6);
    });

    it('Debe retornar el mismo numero si es mayor a 100', () => {
        const numero = 150;
        const resultado = incrementar(numero);
        expect(resultado).toBe(150);
    });
});