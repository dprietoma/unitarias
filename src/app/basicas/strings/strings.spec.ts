import { mensaje } from "./strings";

describe ('Pruebas de string', () => {
    it('Debe retornar un string', () => {
        const nombre = 'David';
        const resultado = mensaje(nombre);
        expect( typeof resultado).toBe('string');
    });


     it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'David';
        const resultado = mensaje(nombre);
        expect(resultado).toContain('¡Hola, David!');
    });




});