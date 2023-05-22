import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopservices',
  templateUrl: './shopservices.component.html',
  styleUrls: ['./shopservices.component.css']
})
export class ShopservicesComponent {
  servicesname:any="";
  options = ['Level 1', 'Level 2', 'Level 3','Level 4'];
  selectedOption: string="service";
  constructor(private router: Router) {
    this.servicesname=sessionStorage.getItem("name")

  }

  moveTolanding(){
    this.router.navigate(['Viewall'])

  }
  moveToProductlist(name:any,list:any){
    sessionStorage.setItem("dropname",name);
    sessionStorage.setItem("level",list)
    this.router.navigate(['Productlist'])
  }

}
