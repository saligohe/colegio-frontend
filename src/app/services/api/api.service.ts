import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ColegioI} from '../../models/colegio';
import {ProfesorI} from '../../models/profesorResponse';
import {AsignaturaI} from '../../models/asignaturaResponse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:8080/runt/api/v1"
  constructor(private http:HttpClient) { }

  getColegio():Observable<ColegioI>{
    let direccion = this.url+"/colegio";
      return this.http.get<ColegioI>(direccion);
  }
 
  getProfesores():Observable<ProfesorI>{
    let direccion = this.url+"/profesor";
      return this.http.get<ProfesorI>(direccion);
  }
  getAsignaturas(val:Number):Observable<AsignaturaI>{
    let direccion = this.url+"/asignatura?id="+val;
      return this.http.get<AsignaturaI>(direccion);
  }

}
