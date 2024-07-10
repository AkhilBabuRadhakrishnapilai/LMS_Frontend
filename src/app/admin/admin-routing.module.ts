import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminPatronsListComponent } from './admin-patrons-list/admin-patrons-list.component';

const routes: Routes = [
  {path:'list',component:AdminListComponent},
  {path:'edit/:id',component:AdminEditComponent},
  {path:'add',component:AdminAddComponent},
  {path:'patronslist',component:AdminPatronsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
