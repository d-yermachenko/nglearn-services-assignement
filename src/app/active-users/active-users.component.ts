import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../services/user-storage';
import { UsersService } from '../../services/users-service';
import { User } from '../../model/user';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  public activeUsers : User[] = []

  constructor(public usersStorageService : UserStorageService, public usersService : UsersService) {
    usersService.onUserListChanged.subscribe(() => {
      this.activeUsers = this.usersStorageService.findActiveUsers();
    });

  }
  ngOnInit(): void {
    this.activeUsers = this.usersStorageService.findActiveUsers();
  }

  inactivateUser(id: number) {
    this.usersService.toggleUserStatus(id);
  }

}
