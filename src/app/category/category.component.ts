import { Component, OnInit } from '@angular/core';
import { ProdSrvService } from '../service/prod-srv.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {



  constructor(private prodservice:ProdSrvService, private route:Router) { }

    prodList:any=[]
    data:any


    ngOnInit(): void {
      this.sortedProd()
 }

 prodDetail = new FormGroup({
  catid: new FormControl(''),
  prodid: new FormControl(''),
  prodname: new FormControl(),
  prodprice: new FormControl(''),
  catname: new FormControl('')
})

  sortedProd(){
    this.prodservice.onGetData().subscribe((data)=>{
      this.data = data

      for(let d of this.data){
        console.log(d.catname)
        if(!(this.prodList).includes(d.catname)){
          this.prodList.push(d.catname)           
        }
        else{
          continue
        }
      }
      console.log(this.prodList)       
        })
   }
  
  onRou(i:any){
    this.route.navigate(['/sorted',i])
  }

 
  addData(){
    console.log(this.prodDetail.value)
      this.prodservice.addUserDetails(this.prodDetail.value).subscribe((user)=>{
        console.log(user)
        
      })
        window.location.reload()

    }


}
