import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';

    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3'),
    ).nativeElement;

    expect(element.innerHTML).toContain('Progreso de carga');
  });

  it('Debe mostrar en el input el valor del progreso', async () => {
    component.cambiarValor(5);

    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.query(By.css('input'));
    const element = input.nativeElement as HTMLInputElement;

    expect(element.value).toBe('55');
  });

  it('Debe incrementar/decrementar con un click en el boton', async () => {
    const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));

    btns[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    btns[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Debe decrementar con un click el valor en  5 y mostralo en el Progreso', async () => {
    const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
    btns[0].triggerEventHandler('click', null);

    fixture.detectChanges();
    await fixture.whenStable();

    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3'),
    ).nativeElement;

    expect(element.innerHTML).toContain('45');
  });


});
