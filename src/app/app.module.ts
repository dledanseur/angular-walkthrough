import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { AppComponent } from './app.component';
import { UserListComponent } from './modules/users/components/user-list.component';

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
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
