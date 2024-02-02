import { Component } from '@angular/core';
import { UsersService } from '../services/users-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activationsCount: number = 0;
  deactivationsCount: number = 0;

  constructor(public usersService: UsersService) {
    usersService.onUserListChanged.subscribe(() => {
      this.activationsCount = usersService.getUserActivationsCount();
      this.deactivationsCount = usersService.getUserDeactivationsCount();
    } );
  }
}
