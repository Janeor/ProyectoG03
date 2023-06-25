import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Components/home-page/home-page.component';
import { RestaurantListPageComponent } from './Components/restaurant-list-page/restaurant-list-page.component';
import { RestaurantDetailPageComponent } from './Components/restaurant-detail-page/restaurant-detail-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ClienteComponent } from './Components/cliente/cliente.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'restaurants', component: RestaurantListPageComponent },
  { path: 'direccion', component: RestaurantDetailPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cliente', component: ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
