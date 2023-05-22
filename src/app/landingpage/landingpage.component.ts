import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    slidesPerView: 2.2
  };
  constructor(private router: Router) {
   
     

  }
  Hideservices:boolean=true;
  HideTranding:boolean=true;
  HideFeature:boolean=true;
  HideFeatured:boolean=true;
  Hideevents:boolean=true
  albumList: any = [
    {
    name:"Facility Management",
    

    img:'../../assets/imgs/logistics.svg'
  },
  {
    name:"Logistics",
    img:'../../assets/imgs/logistics.svg'
  },
  {
    name:"Construction",
    img:'../../assets/imgs/construction.svg'
  }
];

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
  }
  

];
 trandingData:any=[
  {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },
 {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },
 {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },
 {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },{
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },
 {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },{
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 }
 ,{
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },
 {
  name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
  price:"$18.50",
  time:"$18.50",
  images:"../../assets/imgs/nail-polish-bottle.png",
  shipping:"+$11.60 shipping",
 },

]
newtrandingData=[
  {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   }
   ,{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   

];
newfeatureData=[
  {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   }
   ,{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   }

];
featureData=[


  {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   }
   ,{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
  

];
newfeaturedData=[
  {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   }
   ,{
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/headphone.png",
    shipping:"+$11.60 shipping",
   },
   

];
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
   },
   {
    name:"MENS SEIKO KENETIC TITANIUM 100M Head SET! No Reserve!",
    price:"$18.50",
    time:"$18.50",
    images:"../../assets/imgs/construction.png",
    shipping:"+$11.60 shipping",
   },
  

];


neweventsData=[
  {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   }
   
 

];
eventsData=[
  {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
 
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
 
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   },
   {
    title:"Requirement of 2000 Diodes at Nasik plant",
    time:"Sat, 02:PM onwards",
    images:"../../assets/imgs/headphone.png",
    name:"Andrew Smith"
   }
 



 
  

];

showdata(){
  this.Hideservices=false
}
hidedata(){
  this.Hideservices=true
}
showdatatranding(){
  this.HideTranding=false
}
hidedatatranding(){
  this.HideTranding=true
}
showdatafeature(){
  this.HideFeature=false
}
hidedatafeature(){
  this.HideFeature=true
}
showdatafeatured(){
  this.HideFeatured=false
}
hidedatafeatured(){
  this.HideFeatured=true
}
showdataevents(){
  this.Hideevents=false
}
hidedataevents(){
  this.Hideevents=true
}
moveToall(){
  this.router.navigate(['Viewall'])

}

}
