


import { Routes } from '@angular/router';
import { HospitalComponent  } from '../../intermedia2/hospital/hospital.component'
import { MedicosComponent  } from '../../intermedia/espias/medicos.component'
import { IncrementadorComponent  } from '../../intermedia2/incrementador/incrementador.component'

export const APP_ROUTES: Routes  = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicosComponent },
    { path: '', pathMatch: 'full', component: IncrementadorComponent },
]

