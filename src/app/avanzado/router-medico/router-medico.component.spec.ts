import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable  } from 'rxjs';




class FakeRouter {
  navigate( params: any ) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject<any>();

  push( valor: any ): void {
    this.subject.next( valor );
  }

  get params(): Observable<any> {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [ 
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }    
      ]
    });
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a Medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123']);
  });

  it('Debe colocar el id = "Nuevo"',()=> {
    component = fixture.componentInstance;

    const activatedRoute = TestBed.inject(ActivatedRoute) as unknown as FakeActivatedRoute;

    activatedRoute.push({id: 'nuevo'});

    expect( component.id).toBe('nuevo');
  });
});
