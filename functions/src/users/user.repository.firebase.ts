import {UserRepository} from './user.repository';
import * as admin from 'firebase-admin';


export class UserRepositoryFirebase implements UserRepository {
messagesPath: string = 'messages'

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }

  deleteUser(uid: string): Promise<any> {
    return admin.auth().deleteUser(uid);
  }

  deleteMessages(userName: string): Promise<any> {

    const query = this.db().collection(this.messagesPath).where('userName', '==', userName);
    return query.get().then(function (querySnapshot) {
      querySnapshot.forEach(doc => {
        doc.ref.delete().then(() => {
        }).catch(err => {
              console.log(err);
            }
        )
      })
    })

  }


}
