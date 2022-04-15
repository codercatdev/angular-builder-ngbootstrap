import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuilderModule } from '@builder.io/angular';
import { HomeComponent } from './routes/home/home.component';
import { AlertComponent } from './components/alert.component';
import { RouterLinkComponent } from './components/router-link/router-link.component';
import { AlertRouteComponent } from './routes/alert-route/alert-route.component';
import { ButtonComponent } from './components/button.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    RouterLinkComponent,
    AlertRouteComponent,
    ButtonComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BuilderModule.forRoot('1ca9a27ac5dc472da10ca7fd3ef2afd7'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
