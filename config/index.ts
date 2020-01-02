import firebase from 'firebase';
import firebaseConfig from './firebase-config.json';
import googleConfig from './google-config.json';
import facebookConfig from './facebook-config.json';

export default class Config {
    static initialize = (): void => {
        firebase.initializeApp(firebaseConfig);
    };

    static googleConfig = googleConfig;

    static facebookConfig = facebookConfig;
}
