import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquinaFormComponent } from './componentes/maquinas/maquina-form/maquina-form.component';
import { MaquinaListComponent } from './componentes/maquinas/maquina-list/maquina-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/inventario',pathMatch:'full'},
  {path:'inventario', component: MaquinaListComponent},
  {path:'maquinaria', component: MaquinaFormComponent}
  //{path:'maquina/:id', component: MaquinaFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
