import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ShopComponent } from './component/shop/shop.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import {STragopComponent} from './component/s-tragop/s-tragop.component'
import { SChamsocComponent } from './component/s-chamsoc/s-chamsoc.component';
import { Ssuachua } from './component/s-suachua/s-suachua.component';
import { SBaoHanh } from './component/s-baohanh/s-baohanh.component';
import { FGioithieuComponent } from './component/f-gioithieu/f-gioithieu.component';
import { FDieukhoanComponent } from './component/f-dieukhoan/f-dieukhoan.component';
import { FBaomatComponent } from './component/f-baomat/f-baomat.component';

const routes: Routes = [
  {path: '',redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-detail', component: BlogDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 's-tragop', component: STragopComponent},
  {path: 's-baohanh', component: SBaoHanh},
  {path: 's-suachua', component: Ssuachua},
  {path: 's-chamsoc', component: SChamsocComponent},
  {path: 'f-gioithieu', component: FGioithieuComponent},
  {path: 'f-dieukhoan', component: FDieukhoanComponent},
  {path: 'f-baomat', component: FBaomatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
