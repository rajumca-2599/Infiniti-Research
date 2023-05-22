import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  searchText:any=""
  constructor(private router: Router) {

  }
  newalbumlist:any=[
    {
      name:"consumer Elecrtonics",
      
  
      img:'../../assets/imgs/headphone.png'
    },
    {
      name:"Agriculture",
      img:'../../assets/imgs/harvest.png'
    },
    {
      name:"Apparel",
      img:'../../assets/imgs/dress.png'
    },
    {
      name:"Beaty & personal catre",
      
  
      img:'../../assets/imgs/nail-polish-bottle.png'
    },
    {
      name:"Business services",
      img:'../../assets/imgs/hostel.png'
    },
    {
      name:"Chemicals",
      img:'../../assets/imgs/test.png'
    },
    {
      name:"consumer Elecrtonics",
      
  
      img:'../../assets/imgs/headphone.png'
    },
    {
      name:"Agriculture",
      img:'../../assets/imgs/harvest.png'
    },
    {
      name:"Apparel",
      img:'../../assets/imgs/dress.png'
    },
    {
      name:"Beaty & personal catre",
      
  
      img:'../../assets/imgs/nail-polish-bottle.png'
    },
    {
      name:"Business services",
      img:'../../assets/imgs/hostel.png'
    },
    {
      name:"Chemicals",
      img:'../../assets/imgs/test.png'
    },{
      name:"consumer Elecrtonics",
      
  
      img:'../../assets/imgs/headphone.png'
    },
    {
      name:"Agriculture",
      img:'../../assets/imgs/harvest.png'
    },
    {
      name:"Apparel",
      img:'../../assets/imgs/dress.png'
    },
    {
      name:"Beaty & personal catre",
      
  
      img:'../../assets/imgs/nail-polish-bottle.png'
    },
    {
      name:"Business services",
      img:'../../assets/imgs/hostel.png'
    },
    {
      name:"Chemicals",
      img:'../../assets/imgs/test.png'
    }

   
    
  
  ];
  recentlist:any=[
    {
      name:"consumer Elecrtonics",
      
  
      img:'../../assets/imgs/headphone.png'
    },
    {
      name:"Agriculture",
      img:'../../assets/imgs/harvest.png'
    }

   
    
  
  ];
  seachvalue=""
  moveTolanding(){
    this.router.navigate(['/'])
  }
  movetoShops(data:any){
    sessionStorage.setItem("name",data.name)
    this.router.navigate(['Shopservices'])

  }
  searchproducts(data:any){
   let newdata=this.newalbumlist.filter((ele:any)=>{
    // debugger
    return ele.name.toLowerCase()==data.toLowerCase()
   })
   this.newalbumlist=newdata

  }
}
