import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminPatronsListComponent } from './admin-patrons-list/admin-patrons-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminListComponent,
    AdminEditComponent,
    AdminAddComponent,
    AdminPatronsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
