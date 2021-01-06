import {UserRepository} from './user.repository';

export class UserService {

  constructor(private userRepo: UserRepository) {
  }

  deleteUser(uId: string) {
    return this.userRepo.deleteUser(uId);
  }

  deleteMessages(userName: string){
    return this.userRepo.deleteMessages(userName);
  }

}
