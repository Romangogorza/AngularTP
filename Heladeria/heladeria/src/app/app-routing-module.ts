import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHelados } from './lista-helados/lista-helados';
import { Contacto } from './contacto/contacto';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'helado',
    pathMatch: 'full'
  },
  {
    path: 'helado',
    component: ListaHelados
  },
  {
    path:'contacto',
    component:Contacto
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
