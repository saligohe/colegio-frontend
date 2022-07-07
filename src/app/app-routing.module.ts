import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './views/principal/dasboard.component';
import { ProfesoresComponent } from './views/profesor/profesores.component';

const routes: Routes = [
  { path: '', redirectTo: 'profesor', pathMatch: 'full' },
  { path: 'profesor', component: DasboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DasboardComponent, ProfesoresComponent]
