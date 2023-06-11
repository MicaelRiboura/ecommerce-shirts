import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home-page/home-page.page';
import { ProductDetailsPage } from './pages/product-details/product-details.page';
import { AboutPage } from './pages/about/about.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';



@NgModule({
  declarations: [
    HomePage,
    ProductDetailsPage,
    AboutPage,
    ContactUsPage,
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePage,
    ProductDetailsPage,
    AboutPage,
    ContactUsPage
  ]
})
export class PresentationModule { }
