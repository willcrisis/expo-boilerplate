import React, { FunctionComponent } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { useApp } from '../contexts/AppContext';

const loadImages = () =>
    Promise.all([
        Asset.loadAsync([
            require('assets/background.jpg'),
            require('assets/logo.png')
        ])
    ]);

const LoadingScreen: FunctionComponent<{}> = () => {
    const { setAppLoading } = useApp();

    return (
        <AppLoading
            startAsync={loadImages}
            onFinish={() => setAppLoading(false)}
        />
    );
};

export default LoadingScreen;
