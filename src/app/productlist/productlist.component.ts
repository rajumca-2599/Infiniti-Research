import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    slidesPerView: 2.2
  };

  dropNmae:any="";
  listName:any="";
  servicesname:any="";
  newalbumlist=["All","Maintainance services","Work wear & Uniforms","View all"];
  trandingData:any=[
    {
    name:"nail-polish TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:" No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },{
    name:"nail-polish TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   },{
    name:"nail-polish KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   }
   ,{
    name:"TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/nail-polish-bottle.png",
    shipping:"+$11.60 shipping",
   }
  
  ];
  featureData=[


    {
      name:"Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"watch! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:" Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"watch! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },{
      name:"Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"watch! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     },{
      name:"TITANIUM 100M watch! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     }
     ,{
      name:"Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/headphone.png",
      shipping:"+$11.60 shipping",
     }
    
  
  ];
  searchText:any="";
  featuredData=[


    {
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },{
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },
     {
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     },{
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     }
     ,{
      name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
      price:"$18.50",
      time:"$18.50",
      images:"../../assets/imgs/construction.png",
      shipping:"+$11.60 shipping",
     }
    
  
  ];
  constructor(private router: Router) {

    this.servicesname=sessionStorage.getItem("name");
    this.dropNmae=sessionStorage.getItem("dropname");
    this.listName=sessionStorage.getItem("level")

  }
  
  moveToservice(){
    this.router.navigate(['Shopservices'])
  }

}
