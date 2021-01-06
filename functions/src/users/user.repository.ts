export interface UserRepository {
  deleteUser(uid: string): Promise<any>;

  deleteMessages(userName: string): Promise<any>

}
