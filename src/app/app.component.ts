import { Component } from '@angular/core';
import { User } from './class/user';
import { AuthorizeService } from './services/authorize.service';
import { BetterLoggerService } from './services/better-logger.service';
import { LoggerHelperService } from './services/logger-helper.service';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';
import { User2Service } from './services/user2.service';
import { loggerValue } from './values/logger.value';

const UserService2Provider = (logger: LoggerService, authorize: AuthorizeService) => {
  return new User2Service(logger, authorize.getIsAuthorized());
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [
    // LoggerService,
    // [{ provide: LoggerService, useClass: BetterLoggerService }],
    // [LoggerHelperService, {provide: LoggerService, useClass: BetterLoggerService}], // 带有依赖的注册商
    [
      LoggerHelperService,
      { provide: BetterLoggerService, useClass: BetterLoggerService },
    ], // 带有依赖的注册商
    // [LoggerHelperService, {provide: LoggerService, useExisting: BetterLoggerService}],
    { provide: LoggerService, useValue: loggerValue },
    UserService,
    AuthorizeService, // 不可缺少
    {
        provide: User2Service,
        useFactory: UserService2Provider,
        deps: [LoggerService, AuthorizeService]
    }
  ],
})
export class AppComponent {
  title = 'ng-study';

  users: User[];



  constructor(private userService: UserService, private userService2: User2Service) {
    this.users = userService.getUsers();

    console.log(this.userService2.getUsers());
  }


}
