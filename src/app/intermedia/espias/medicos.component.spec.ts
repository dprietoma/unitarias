import { HttpClient } from '@angular/common/http';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of, throwError } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService({} as HttpClient);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Debería mostrar la lista de médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.returnValue(of(medicos));

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debería agregar un médico a la lista', () => {
    const medico = { nombre: 'Médico Juan Carlos' };

    spyOn(servicio, 'agregarMedico').and.returnValue(of(medico));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Debería mostrar un mensaje de error al agregar un médico', () => {
    const error = 'No se pudo agregar el médico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => error));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(error);
  });

  it('Debería borrar un médico de la lista', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(servicio, 'borrarMedico').and.returnValue(of({}));

    componente.borrarMedico('123');

    expect(servicio.borrarMedico).toHaveBeenCalledWith('123');
  });

  it('No debería borrar un médico de la lista', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(servicio, 'borrarMedico').and.returnValue(of({}));

    componente.borrarMedico('123');

    expect(servicio.borrarMedico).not.toHaveBeenCalledWith('123');
  });
});
