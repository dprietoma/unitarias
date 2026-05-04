import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrls: ['./router-medico.component.css']
})
export class RouterMedicoComponent implements OnInit{
  private route = inject(Router);
  private activeRouter = inject(ActivatedRoute);
  id: string = '';



  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
        this.id = params['id'];
    })
  }

  guardarMedico() {
    this.route.navigate(['medico','123']);
  }
}
