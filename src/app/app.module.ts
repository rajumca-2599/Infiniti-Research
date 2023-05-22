import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ShopservicesComponent } from './shopservices/shopservices.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ViewallComponent,
    ShopservicesComponent,
    ProductlistComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
