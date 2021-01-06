import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from "./dependencyFactory";
import {User} from "./models/user";

const serviceAccount = require('../secret.json');
const Users = 'Users';


const factory = new DependencyFactory();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://robotapp-153a9.firebaseio.com',
});


exports.deleteUserInAuth = functions.firestore
    .document(Users + '/{uId}').onDelete((snap) => {
        return factory.getUserController().delete(snap.id);
    });

exports.deleteMessages = functions.firestore.document(Users + '/{uId}').onDelete((snap) =>{
    const temp = snap.data() as User;
    return factory.getUserController().deleteMessages(temp.name);
});
