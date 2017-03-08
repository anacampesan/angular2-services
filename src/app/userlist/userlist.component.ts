import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

import { User } from './user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService]
})
export class UserlistComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

}
