import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CarsComponent } from './components/cars/cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { RentsHistoryComponent } from './components/rents-history/rents-history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {aboutUrl, carsUrl, clientsUrl, homePageUrl, notFoundPageUrl, rentsHistoryUrl} from "./models/urls";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";

const routingTable: Routes = [
  {path: homePageUrl, component: HomeComponent},
  {path: rentsHistoryUrl, component: RentsHistoryComponent},
  {path: carsUrl, component: CarsComponent},
  {path: clientsUrl, component: ClientsComponent},
  {path: aboutUrl, component: AboutComponent},
  {path: notFoundPageUrl, component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TopBarComponent,
    NavigationBarComponent,
    ClientsComponent,
    AboutComponent,
    RentsHistoryComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    RouterModule.forRoot(routingTable),
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
