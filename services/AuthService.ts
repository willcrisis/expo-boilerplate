import { User, UserCredential } from '../types';

export default interface AuthService {
    listenToLoginChanges: (
        setCurrentUser: (user: User) => void,
        setAuthLoading: (authLoading: boolean) => void
    ) => void;

    loginWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<UserCredential>;

    registerWithEmailAndPassword: (
        name: string,
        email: string,
        password: string
    ) => Promise<UserCredential>;

    loginWithGoogle: () => Promise<UserCredential>;

    loginWithFacebook: () => Promise<UserCredential>;

    logOut: () => Promise<void>;

    resetPassword: (email: string) => Promise<void>;
}
