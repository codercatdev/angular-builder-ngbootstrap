import { AlertRouteComponent } from './routes/alert-route/alert-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alert', component: AlertRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
