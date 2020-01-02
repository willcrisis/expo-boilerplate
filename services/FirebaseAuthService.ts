import firebase from 'firebase';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/auth';
import { Platform } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import Config from 'config';
import { User, UserCredential } from 'types';
import AuthService from './AuthService';

export default class FirebaseAuth implements AuthService {
    authInstance: firebase.auth.Auth;

    constructor() {
        this.authInstance = firebase.auth();
    }

    listenToLoginChanges = (
        setCurrentUser: (user: User) => void,
        setAuthLoading: (authLoading: boolean) => void
    ) =>
        this.authInstance.onAuthStateChanged(user => {
            setCurrentUser(user);
            setAuthLoading(false);
        });

    loginWithEmailAndPassword = (
        email: string,
        password: string
    ): Promise<UserCredential> =>
        this.authInstance.signInWithEmailAndPassword(email, password);

    loginWithGoogle = (): Promise<UserCredential> => {
        const login = Platform.select({
            web: () =>
                this.authInstance.signInWithPopup(
                    new firebase.auth.GoogleAuthProvider()
                ),
            default: async () => {
                const { type, accessToken, idToken } = await Google.logInAsync(
                    Config.googleConfig
                );
                if (type === 'success') {
                    const credential = firebase.auth.GoogleAuthProvider.credential(
                        idToken,
                        accessToken
                    );
                    return this.authInstance.signInWithCredential(credential);
                }
                throw new Error('login error');
            }
        });
        return login();
    };

    loginWithFacebook = (): Promise<UserCredential> => {
        const login = Platform.select({
            web: () =>
                this.authInstance.signInWithPopup(
                    new firebase.auth.FacebookAuthProvider()
                ),
            default: async () => {
                const {
                    type,
                    token
                } = await Facebook.logInWithReadPermissionsAsync(
                    Config.facebookConfig.appId
                );
                if (type === 'success') {
                    const credential = firebase.auth.FacebookAuthProvider.credential(
                        token
                    );
                    return this.authInstance.signInWithCredential(credential);
                }
                throw new Error('login error');
            }
        });
        return login();
    };

    registerWithEmailAndPassword = async (
        name: string,
        email: string,
        password: string
    ): Promise<UserCredential> => {
        const credentials = await this.authInstance.createUserWithEmailAndPassword(
            email,
            password
        );
        const { user } = credentials;
        await user.updateProfile({ displayName: name });
        await firebase
            .firestore()
            .doc(`users/${user.uid}`)
            .set({
                name
            });
        return credentials;
    };

    resetPassword = (email: string) => {
        return this.authInstance.sendPasswordResetEmail(email);
    };

    logOut = async (): Promise<void> => this.authInstance.signOut();
}
