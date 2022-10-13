import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProdSrvService } from '../service/prod-srv.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private prodservice : ProdSrvService) { }
  prodList:any
  ngOnInit(): void {
    this.prodservice.onGetData().subscribe((data)=>{
      console.log(data)
          this.prodList = data
        })
  }

prodDetail = new FormGroup({
    catid: new FormControl(''),
    prodid: new FormControl(''),
    prodname: new FormControl(),
    prodprice: new FormControl(''),
    catname: new FormControl('')
  })

  

  addData(){
    console.log(this.prodDetail.value)
      this.prodservice.addUserDetails(this.prodDetail.value).subscribe((user)=>{
        console.log(user)
      })
        window.location.reload()

    }

      object_id:any
      edit(id:any){
        this.object_id=id
        
        this.getDat(this.object_id)
      }

      data:any 
      getDat(id:any){
        // console.log(id)
        this.prodservice.searchUserDetails(id).subscribe((data)=>{
          console.log(data)
          this.data=data
          this.setData(this.data)
        })
      }

      setData(data:any){
  console.log(data[0])
  this.prodDetail.patchValue({
  catid: data[0].catid,
  prodid: data[0].prodid,
  prodname: data[0].prodname,
  prodprice: data[0].prodprice,
  catname: data[0].catname
})
      }
  
  upData(){
    console.log(this.prodDetail.value)
     this.prodservice.updateDetails(this.prodDetail.value,this.object_id).subscribe
    ((mdata)=>{
     console.log(mdata)
      })
      window.location.reload()
   }
        
      
   delete(id:any){
    this.prodservice.deleteDetails(id).subscribe((mdata)=>{
      console.log(mdata)
    })
    window.location.reload()
   }
        
        
        
        
        
        
        }

