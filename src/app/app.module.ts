import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './modules/users/components/user-list.component';
import { UserAddComponent } from './modules/users/components/user-add.component';

import { UserService } from './modules/users/services/user.service';

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full'},
  { path: "users", component: UserListComponent },
  { path: "users/add", component: UserAddComponent }
 ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
