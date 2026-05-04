import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedia/espias/medicos.component';
import { MedicoComponent } from './intermedia2/medico/medico.component';
import { MedicoService } from './intermedia2/medico/services/medico.service';
import { HospitalComponent } from './intermedia2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedia2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './avanzado/rutas/app.route';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';



@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
