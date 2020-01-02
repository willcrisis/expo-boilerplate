import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    FunctionComponent,
    PropsWithChildren
} from 'react';

import { User } from '../types';
import { useService } from './ServicesContext';

type Auth = {
    isAuthLoading: boolean;
    currentUser: User;
};

const AuthContext = createContext<Auth>(null);

const AuthContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
    children
}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthLoading, setAuthLoading] = useState(true);

    const { authService } = useService();

    useEffect(() => {
        authService.listenToLoginChanges(setCurrentUser, setAuthLoading);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthLoading,
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): Auth => useContext(AuthContext);

export default AuthContextProvider;
