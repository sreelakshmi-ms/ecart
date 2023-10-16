import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // model form for add
  addFormModel = this.fb.group({
    id: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    productName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    categoryId: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    description: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z., ]+')]],
    price: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    is_available: ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    image: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9:/.-]+')]],
    rating: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    review: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    vendor_name: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]+')]],
    warrenty: ['',[Validators.required,Validators.pattern('[0-9]+')]],
  })

  constructor(private fb: FormBuilder, private ds:DataService, private rout:Router) { }

  ngOnInit(): void {

  }
  addNewProduct() {

    const path = this.addFormModel.value

    let productData = {
      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      is_available: path.is_available,
      image: path.image,
      rating: path.rating,
      review: path.review,
      vendor_name: path.vendor_name,
      warrenty: path.warrenty,
    }

    if(this.addFormModel.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          alert("New Product Added")
          this.rout.navigateByUrl("")
        }
      })
    }
    else{
      alert("Please fill all..")
    }
    

  }


}
