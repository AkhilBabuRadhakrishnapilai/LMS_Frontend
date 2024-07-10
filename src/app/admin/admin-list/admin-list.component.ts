import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  searchTerm='';

  constructor(public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.listBooks();
  }

  editBooks(book:Book){
    this.bookData(book);
    this.router.navigate(['admin/list',book.id]);
  }
  bookData(book: Book) {
    this.adminService.bookEditData = Object.assign({},book);
  }

  //disable
  disableRecord(id:number){
    if(confirm("Are you sure want to disable this record?")){
      this.adminService.deleteBooks(id).subscribe((response:any)=>{
        console.log(response);
        this.adminService.listBooks();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
