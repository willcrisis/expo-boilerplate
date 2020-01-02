import React, { FunctionComponent } from 'react';
import { ScreenContainer, Spacer, Input, Button, Text } from 'components';
import useRequiredState from 'hooks/state/useRequiredState';
import { useService } from 'contexts/ServicesContext';
import styles from './ForgotPasswordForm.styles';

type Props = {
    closeForm: () => void;
    defaultEmail?: string;
};

const ForgotPasswordForm: FunctionComponent<Props> = ({
    closeForm,
    defaultEmail = ''
}) => {
    const [email, setEmail, isEmailValid, isEmailDirty] = useRequiredState(
        defaultEmail
    );
    const { authService } = useService();

    return (
        <ScreenContainer padded centered style={styles.container}>
            <Spacer />
            <Text category="h6">
                Type in your email to receive instructions on how to recover
                your password.
            </Text>
            <Spacer />
            <Input
                placeholder="E-mail address"
                value={email}
                status={isEmailDirty && !isEmailValid && 'danger'}
                caption={isEmailDirty && !isEmailValid && 'Required field'}
                onChangeText={text => setEmail(text)}
                textContentType="emailAddress"
            />
            <Spacer />
            <Button
                fullWidth
                disabled={!isEmailValid}
                onPress={() => {
                    authService.resetPassword(email);
                    closeForm();
                }}
            >
                Send recovery email
            </Button>
            <Spacer />
        </ScreenContainer>
    );
};

export default ForgotPasswordForm;
