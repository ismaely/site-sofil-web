import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppCorpoComponent } from './app-corpo/app-corpo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppBannerComponent,
    AppFooterComponent,
    AppCorpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
