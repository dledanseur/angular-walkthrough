import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
 templateUrl: './user-add.component.html'
})
export class UserAddComponent {
 user: User = { email:"", name: ""}
 constructor(private userService: UserService, private router: Router) {}

 save() {
   this.userService.save(this.user).subscribe( () => {
     this.router.navigate(['users']);

   }, (error) => {
     alert("An error occured:"+error);
   });
 }
}
