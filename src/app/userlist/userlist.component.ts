import { Component, OnInit, Input } from '@angular/core';

import { UserService } from './user.service';

import { User } from './user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService]
})
export class UserlistComponent implements OnInit {

  @Input() selectedUser;

  users: User[];

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
    this.selectedUser = 'No user has been selected.'
  }

  selectUser(user) {
    this.selectedUser = 'The user ' + user.name + ' has been selected.'
  }

}
