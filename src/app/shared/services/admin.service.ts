import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Roles } from '../models/roles';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  books:Book[]=[]

  //storing book data from list
  bookEditData:Book = new Book();
  
  constructor(private httpClient:HttpClient) { }

  //list of books
  listBooks():void{
    this.httpClient.get<Book[]>(environment.apiUrl+"books").subscribe((response:any)=>{
      console.log(response);
      this.books=response;
    })
  }

  //add books
  addBooks(book:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"addbooks",book)
  }

  //update books
  updateBooks(book:any):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"edit/"+book.id,book)
  }
  //delete books
  deleteBooks(id:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"delete/"+id)
  }
}
