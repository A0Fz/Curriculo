import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HabComponent } from './hab/hab.component';
import { ResmComponent } from './resm/resm.component';
import { ExpComponent } from './exp/exp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HabComponent,
    ResmComponent,
    ExpComponent,
 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
