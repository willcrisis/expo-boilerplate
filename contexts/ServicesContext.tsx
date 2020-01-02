import React, {
    createContext,
    useContext,
    FunctionComponent,
    PropsWithChildren
} from 'react';
import AuthService from 'services/AuthService';
import FirebaseAuthService from 'services/FirebaseAuthService';

type Services = {
    authService: AuthService;
};

const ServicesContext = createContext<Services>(null);

const ServicesContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
    children
}) => {
    const authService = new FirebaseAuthService();
    return (
        <ServicesContext.Provider
            value={{
                authService
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

export const useService = (): Services => useContext(ServicesContext);

export default ServicesContextProvider;
