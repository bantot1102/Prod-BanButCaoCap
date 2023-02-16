import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { ShopComponent } from './component/shop/shop.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LoginComponent } from './component/login/login.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { STragopComponent } from './component/s-tragop/s-tragop.component';
import { SChamsocComponent } from './component/s-chamsoc/s-chamsoc.component';
import { Ssuachua } from './component/s-suachua/s-suachua.component';
import { SBaoHanh } from './component/s-baohanh/s-baohanh.component';
import { FGioithieuComponent } from './component/f-gioithieu/f-gioithieu.component';
import { FDieukhoanComponent } from './component/f-dieukhoan/f-dieukhoan.component';
import { FBaomatComponent } from './component/f-baomat/f-baomat.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShopComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BlogComponent,
    BlogDetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactUsComponent,
    ProductDetailComponent,
    LoginComponent,
    WishlistComponent,
    STragopComponent,
    SChamsocComponent,
    Ssuachua,
    SBaoHanh,
    FGioithieuComponent,
    FDieukhoanComponent,
    FBaomatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
