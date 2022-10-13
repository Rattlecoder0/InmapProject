import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProdSrvService {

  constructor(private http : HttpClient) { 
  }

  data = 'http://localhost:3000/getdata'

  onGetData(){
    return this.http.get('http://localhost:3000/getData')
  }

  addUserDetails(formData:any){
    return this.http.post('http://localhost:3000/addData',formData)
  }

  updateurl = 'http://localhost:3000/updateData'
  updateDetails(formData:any,id:any){
    console.log(formData)
    return this.http.put(`${this.updateurl}/${id}`,formData)
  }

  
  deleteurl = 'http://localhost:3000/deleteData'
  deleteDetails(id:any){
    return this.http.delete(`${this.deleteurl}/${id}`)
  }

  // search api
  searchUserDetails(id:any){
    // console.log(id)
    return this.http.get(`http://localhost:3000/searchData/${id}`)
  }

  
  // category wise data api
  catProdDetails(name:any){
    return this.http.get(`http://localhost:3000/catData/${name}`)
  }

  

}


