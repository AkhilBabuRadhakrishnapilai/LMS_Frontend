import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'shared/home',pathMatch:'full'},
  {
    path:'shared',component:SharedComponent,
    loadChildren:()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
