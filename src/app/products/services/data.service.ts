import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  // api to access all products from products collection- get
  getAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  // api to get single product data
  getProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }

  // api to delete product
  removeProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }

  // api to add product
  addProduct(bodyData:any){
    return this.http.post('http://localhost:3000/products/',bodyData)
  }

  // api to edit
  updateProduct(id:any,bodyData:any){
    return this.http.put('http://localhost:3000/products/'+id,bodyData)
  }
  
}
