import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
 templateUrl: './user-list.component.html'
})
export class UserListComponent {

 users : User[];

 constructor(private userService: UserService) {
   userService.getAll().subscribe((users) => {
     this.users = users;
   }, (error) => {
     alert("error");
   });
 }
}
