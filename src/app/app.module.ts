import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RestaurantListPageComponent } from './Components/restaurant-list-page/restaurant-list-page.component';
import { RestaurantDetailPageComponent } from './Components/restaurant-detail-page/restaurant-detail-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { InsertarClienteComponent } from './Components/insertar-cliente/insertar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    RestaurantListPageComponent,
    RestaurantDetailPageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ClienteComponent,
    InsertarClienteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
