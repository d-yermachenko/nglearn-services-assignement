import { Component, OnInit  } from '@angular/core';
import { UserStorageService } from '../../services/user-storage';
import { UsersService } from '../../services/users-service';
import { User } from '../../model/user';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  public inactiveUsers : User[] = [];

  activateUser(id: number) {
    this.usersService.toggleUserStatus(id);
    this.inactiveUsers = this.usersStorageService.findInactiveUsers();
  }

  ngOnInit(): void {
    this.inactiveUsers = this.usersStorageService.findInactiveUsers();
  }


  constructor(private usersService: UsersService, private usersStorageService : UserStorageService) {
    usersService.onUserListChanged.subscribe(() => {
      this.inactiveUsers = this.usersStorageService.findInactiveUsers();
    });

  }
}
