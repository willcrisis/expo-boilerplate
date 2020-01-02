import React, {
    useState,
    useCallback,
    useContext,
    createContext,
    FunctionComponent,
    PropsWithChildren
} from 'react';
import { light, dark, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
    ApplicationProvider,
    IconRegistry,
    ThemeType
} from 'react-native-ui-kitten';

type ThemeContextType = {
    theme: ThemeType;
    changeTheme: () => void;
    isDarkThemeActive: boolean;
};

const ThemeContext = createContext<ThemeContextType>(null);

const ThemeContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
    children
}) => {
    const [theme, setTheme] = useState(light);
    const [isDarkThemeActive, setDarkThemeActive] = useState(false);

    const changeTheme = useCallback(() => {
        setTheme(isDarkThemeActive ? light : dark);
        setDarkThemeActive(currentValue => !currentValue);
    }, [isDarkThemeActive, setDarkThemeActive, setTheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
                isDarkThemeActive
            }}
        >
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider mapping={mapping} theme={theme}>
                {children}
            </ApplicationProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export default ThemeContextProvider;
