import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import { ButtonProps } from '@ui-kitten/components';
import { ScreenContainer, Spacer, Button, Icon, Text, Modal } from 'components';
import { useService } from 'contexts/ServicesContext';
import styles from './AuthScreen.styles';
import AuthForm from './AuthForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignUpForm from './SignUpForm';

const SocialButton = (props: ButtonProps) => {
    return <Button appearance="ghost" size="giant" {...props} />;
};

const AuthScreen: FunctionComponent<{}> = () => {
    const [isResetPasswordFormOpen, setResetPasswordFormOpen] = useState(false);
    const [isSignUpFormOpen, setSignUpFormOpen] = useState(false);

    const { authService } = useService();

    return (
        <ScreenContainer
            padded
            centeredHorizontal
            pure
            style={styles.container}
            level="3"
        >
            <Spacer />
            {/* Place your logo here */}
            {/* <Image source={require('assets/logo.png')} /> */}
            {isSignUpFormOpen ? (
                <SignUpForm
                    openSignInForm={() => {
                        setSignUpFormOpen(false);
                    }}
                    register={(
                        name: string,
                        email: string,
                        password: string
                    ) => {
                        authService.registerWithEmailAndPassword(
                            name,
                            email,
                            password
                        );
                    }}
                />
            ) : (
                <AuthForm
                    openPasswordResetForm={() => {
                        setResetPasswordFormOpen(true);
                    }}
                    openSignUpForm={() => {
                        setSignUpFormOpen(true);
                    }}
                    login={(email: string, password: string) => {
                        authService.loginWithEmailAndPassword(email, password);
                    }}
                />
            )}
            <View style={styles.socialContainer}>
                <Text>
                    Sign&nbsp;
                    {isSignUpFormOpen ? 'up' : 'in'}
                    &nbsp;with a social account
                </Text>
                <View style={styles.socialButtons}>
                    <SocialButton
                        icon={style => <Icon name="google" {...style} />}
                        onPress={authService.loginWithGoogle}
                    />
                    <SocialButton
                        icon={style => <Icon name="facebook" {...style} />}
                        onPress={authService.loginWithFacebook}
                    />
                </View>
            </View>
            <Spacer />
            <Modal
                visible={isResetPasswordFormOpen}
                allowBackdrop
                backdropStyle={{
                    backgroundColor: 'black',
                    opacity: 0.5
                }}
                onBackdropPress={() => setResetPasswordFormOpen(false)}
            >
                <ForgotPasswordForm
                    closeForm={() => setResetPasswordFormOpen(false)}
                />
            </Modal>
        </ScreenContainer>
    );
};

export default AuthScreen;
