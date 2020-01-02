import React, {
    createContext,
    useState,
    useContext,
    FunctionComponent,
    PropsWithChildren
} from 'react';

type App = {
    isAppLoading: boolean;
    setAppLoading: (isAppLoading: boolean) => void;
};

const AppContext = createContext<App>(null);

const AppContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
    children
}) => {
    const [isAppLoading, setAppLoading] = useState(true);

    return (
        <AppContext.Provider
            value={{
                isAppLoading,
                setAppLoading
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): App => useContext(AppContext);

export default AppContextProvider;
