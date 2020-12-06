import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppCorpoComponent } from './app-corpo/app-corpo.component';
import { AppIndexComponent } from './app-index/app-index.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PageContactoComponent } from './page-contacto/page-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppBannerComponent,
    AppFooterComponent,
    AppCorpoComponent,
    AppIndexComponent,
    PageServiceComponent,
    PageContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
