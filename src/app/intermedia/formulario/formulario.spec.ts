import { Formulario } from './formulario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('Formulario', () => {
  let componente: Formulario;

  beforeEach(() => {
    componente = new Formulario(new FormBuilder());
  });

  it('should create an instance', () => {
    expect(componente).toBeTruthy();
  });

  it('Debe crear un formulario con los campos id, nome, email, telefone, mensagem y password', () => {
    expect(componente.form.contains('id')).toBeTruthy();
    expect(componente.form.contains('nome')).toBeTruthy();
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('telefone')).toBeTruthy();
    expect(componente.form.contains('mensagem')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El campo email debe ser obligatorio y tener formato de email', () => {
    const control = componente.form.get('email');

    expect(control).toBeTruthy();

    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('test');
    expect(control?.valid).toBeFalsy();

    control?.setValue('test@example.com');
    expect(control?.valid).toBeTruthy();
 });
});
