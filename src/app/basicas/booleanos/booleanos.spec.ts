import { usuarioIngresado } from "./booleanos";


describe ('Pruebas de booleanos ', () => {
    it('Debe retornar un booleano', () => {
        const resultado = usuarioIngresado();
        expect( typeof resultado).toBe('boolean');
    });

     it('Debe retornar true', () => {
        const resultado = usuarioIngresado();
        expect(resultado).toBe(true);
    });     
    
});