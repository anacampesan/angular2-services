import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
// Mocking is no longer necessary as we're consuming data from an API
// import { USERS } from './mock-users'

@Injectable()
export class UserService {

  private usersHttp = 'https://reqres.in/api/users?page=2';

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    // return Promise.resolve(USERS);
    // Now we're sending a request instead of returning data from the mock
    
    return this.http.get(this.usersHttp)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(error)
    return Promise.reject(error.message || error);
  }

}
