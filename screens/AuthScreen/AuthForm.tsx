import React from 'react';
import { View } from 'react-native';
import { Spacer, Input, PasswordInput, Button } from 'components';
import useRequiredState from 'hooks/state/useRequiredState';
import styles from './AuthScreen.styles';

type Props = {
    openPasswordResetForm: () => void;
    openSignUpForm: () => void;
    login: (email: string, password: string) => void;
};

const AuthForm = ({ openPasswordResetForm, openSignUpForm, login }: Props) => {
    const [email, setEmail, isEmailValid, isEmailDirty] = useRequiredState('');
    const [
        password,
        setPassword,
        isPasswordValid,
        isPasswordDirty
    ] = useRequiredState('');

    return (
        <View style={styles.form}>
            <Input
                placeholder="E-mail"
                value={email}
                status={isEmailDirty && !isEmailValid && 'danger'}
                caption={isEmailDirty && !isEmailValid && 'Required field'}
                textContentType="username"
                onChangeText={text => setEmail(text)}
            />
            <Spacer />
            <PasswordInput
                placeholder="Password"
                value={password}
                status={isPasswordDirty && !isPasswordValid && 'danger'}
                caption={
                    isPasswordDirty && !isPasswordValid && 'Required field'
                }
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button
                appearance="ghost"
                style={styles.forgotPassword}
                onPress={openPasswordResetForm}
            >
                Forgot my password
            </Button>
            <Spacer />
            <Button
                disabled={!(isEmailValid && isPasswordValid)}
                onPress={() => login(email, password)}
            >
                Login
            </Button>
            <Spacer />
            <Button
                appearance="ghost"
                textStyle={styles.text}
                onPress={openSignUpForm}
            >
                Don&apos;t have an account? Sign Up
            </Button>
        </View>
    );
};

export default AuthForm;
