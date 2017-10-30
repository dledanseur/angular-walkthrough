import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface User {
 name: string;
 email: String;
}

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

 public getAll():Observable<User[]> {
   return this.httpClient.get('http://demo7403400.mockable.io/users') as Observable<User[]>;
 }

  public save(u: User):Observable<any> {
    return this.httpClient.post('http://demo7403400.mockable.io/users',u) as Observable<any>;
  }

}
