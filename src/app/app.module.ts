import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MenuModule } from './menu/menu.module';
import { NbajasModule } from './nbajas/nbajas.module';
import { NoticiasModule } from './noticias/noticias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    MainModule,
    NoticiasModule,
    NbajasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
