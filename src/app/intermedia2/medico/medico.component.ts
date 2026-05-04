import { Component, inject } from '@angular/core';
import { MedicoService } from './services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {

  private medicoServices = inject(MedicoService);

  medicos: any[] = [];


  saludarMedico(nombre: string): string {
    return `Hola, soy el médico ${nombre}`;
  }

  obtenerMedicos() {
    this.medicoServices.getMedicos().subscribe((medicos: any) => {
      this.medicos = medicos;
    });
  }

}
