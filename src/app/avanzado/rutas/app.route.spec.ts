
import { MedicosComponent } from '../../intermedia/espias/medicos.component';
import { APP_ROUTES } from './app.route';

describe('Rutas Principales', () => {


    it('Debe de existir la ruta /medico/:id', () => {
        expect(APP_ROUTES).toContain({
            path:'medico/:id',
            component: MedicosComponent
        })
    })
});
