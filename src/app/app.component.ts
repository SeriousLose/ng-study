import { Component } from '@angular/core';
import { User } from './class/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [UserService],
})
export class AppComponent {
  title = 'ng-study';

  users: User[];

  constructor(private userService: UserService) {
      this.users = userService.getUsers();
  }
}
