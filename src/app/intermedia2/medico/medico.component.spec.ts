import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component";
import { MedicoService } from "./services/medico.service";
import { HttpClientModule } from "@angular/common/http";

describe('MedicoComponent2', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('saludarMedico should return correct greeting', () => {
    const nombre = 'Juan';
    const saludo = component.saludarMedico(nombre);
    expect(saludo).toBe(`Hola, soy el médico ${nombre}`);
  });
});