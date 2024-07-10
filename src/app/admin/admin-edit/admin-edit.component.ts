import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  minDate: string = '';
  maxDate: string = '';
  currentDate: string = '';

  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    const today = new Date();
    const minYear = today.getFullYear() - 100;
    const maxYear = today.getFullYear() - 60;

    this.minDate = new Date(minYear, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    this.maxDate = new Date(maxYear, today.getMonth(), today.getDate()).toISOString().split('T')[0];

    this.currentDate = today.toISOString().split('T')[0];
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.editBook(form);
  }
  editBook(form: NgForm) {
    this.adminService.updateBooks(form).subscribe((result: any) => {
      console.log(result.value);
      console.log(result.emp_id, "in updateUser")
      this.reset(form);
      this.router.navigate(['admin/list']);
    })
  }
  reset(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }
  }

}
