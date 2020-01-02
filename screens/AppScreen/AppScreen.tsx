import React, { FunctionComponent } from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import { ScreenContainer, Button } from 'components';
import { useService } from 'contexts/ServicesContext';

const AppScreen: FunctionComponent<{}> = () => {
    const { authService } = useService();
    return (
        <ScreenContainer padded centered>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button onPress={authService.logOut}>Log Out</Button>
        </ScreenContainer>
    );
};

export default AppScreen;
