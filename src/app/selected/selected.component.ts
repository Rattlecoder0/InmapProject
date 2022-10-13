import { Component, OnInit } from '@angular/core';
import { ProdSrvService } from '../service/prod-srv.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {

  
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private prodservice:ProdSrvService, private act:ActivatedRoute) { }

  sort:any
  obj_id:any
  ngOnInit(): void {
    this.act.params.subscribe((para) => {
      this.sort = para['name']
      console.log(this.sort)
      this.getData(this.sort)
    }
  )
    this.pagi()
  }
 
  prodDetail = new FormGroup({
    catid: new FormControl(''),
    prodid: new FormControl(''),
    prodname: new FormControl(),
    prodprice: new FormControl(''),
    catname: new FormControl('')
  })

  
  

  sot:any
  getData(name:any){
    this.prodservice.catProdDetails(name).subscribe((data)=>{
      this.sot = data
      console.log(data)
        })
    }
  
    pagi(){
      this.prodservice.onGetData().subscribe(
        (response) => {
          this.POSTS = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
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
          
     addData(){
      console.log(this.prodDetail.value)
        this.prodservice.addUserDetails(this.prodDetail.value).subscribe((user)=>{
          console.log(user)
        })
          window.location.reload()
      }
        
     delete(id:any){
      this.prodservice.deleteDetails(id).subscribe((mdata)=>{
        console.log(mdata)
      })
      window.location.reload()
     }


     onTableDataChange(event: any) {
      this.page = event;
      this.pagi();
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.pagi();
    }

}