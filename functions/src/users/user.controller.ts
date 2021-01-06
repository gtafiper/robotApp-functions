import {UserService} from './user.service';

export class UserController {

  constructor(private userService: UserService) {
  }

  delete(snap: string) {
    return this.userService.deleteUser(snap);
  }


  deleteMessages(name: string) {
    return this.userService.deleteMessages(name);

  }
}

