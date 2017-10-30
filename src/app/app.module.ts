import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './modules/users/components/user-list.component';

import { UserService } from './modules/users/services/user.service';

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full'},
  { path: "users", component: UserListComponent }
 ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
