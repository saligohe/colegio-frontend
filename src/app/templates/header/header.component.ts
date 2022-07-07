import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ColegioI} from '../../models/colegio'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }
  nombre:string ="";

  ngOnInit(): void {
    this.api.getColegio().subscribe(data=>{
      let userResponse:ColegioI=data;
      this.nombre=userResponse.datos[0].nombre;
    })

  }

}
