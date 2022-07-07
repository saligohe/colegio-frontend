import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ProfesorI } from '../../models/profesorResponse';
import { Profesor } from '../../models/profesor';
import { AsignaturaI } from '../../models/asignaturaResponse';
import { Router } from '@angular/router';
import { Asignatura } from '../../models/asignatura';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores:Profesor[];
  asignaturas:Asignatura[];
  lista:string;

  constructor(private api:ApiService, private router:Router) {
    this.profesores=[];
    this.asignaturas=[];
    this.lista="";
   }

  ngOnInit(): void {
    this.api.getProfesores().subscribe(data=>{
      let profesorResponse:ProfesorI=data;
      this.profesores = profesorResponse.datos;
    })

  }
  buscarAsignaturas(id: Number) {
    this.api.getAsignaturas(id).subscribe(data => {
      let asignaturaResponse: AsignaturaI = data;
      this.asignaturas = asignaturaResponse.datos;
    })
  }

}
