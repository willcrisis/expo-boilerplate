import React from 'react';
import { View } from 'react-native';
import { Spacer, Input, PasswordInput, Button } from 'components';
import useRequiredState from 'hooks/state/useRequiredState';
import styles from './AuthScreen.styles';

type Props = {
    openSignInForm: () => void;
    register: (name: string, email: string, password: string) => void;
};

const AuthForm = ({ openSignInForm, register }: Props) => {
    const [name, setName, isNameValid, isNameDirty] = useRequiredState('');
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
                placeholder="Name"
                value={name}
                status={isNameDirty && !isNameValid && 'danger'}
                caption={isNameDirty && !isNameValid && 'Required field'}
                onChangeText={text => setName(text)}
            />
            <Spacer />
            <Input
                placeholder="E-mail"
                value={email}
                status={isEmailDirty && !isEmailValid && 'danger'}
                caption={isEmailDirty && !isEmailValid && 'Required field'}
                textContentType="emailAddress"
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
                textContentType="newPassword"
            />
            <Spacer />
            <Button
                disabled={!(isEmailValid && isPasswordValid)}
                onPress={() => register(name, email, password)}
            >
                Register
            </Button>
            <Spacer />
            <Button
                appearance="ghost"
                textStyle={styles.text}
                onPress={openSignInForm}
            >
                Already have an account? Sign In
            </Button>
        </View>
    );
};

export default AuthForm;
