import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ShopservicesComponent } from './shopservices/shopservices.component';
import { ProductlistComponent } from './productlist/productlist.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: "Landingpage",
    pathMatch: 'full'
  },
  {
    path: "Landingpage", component:LandingpageComponent
  },
  {
    path: "Viewall", component:ViewallComponent
  },
  {
    path: "Shopservices", component:ShopservicesComponent
  },
  {
    path: "Productlist", component:ProductlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
