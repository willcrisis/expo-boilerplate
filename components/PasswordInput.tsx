import React, { useState, useCallback, FunctionComponent } from 'react';
import { Input, Icon, InputProps } from 'react-native-ui-kitten';

const PasswordInput: FunctionComponent<InputProps> = ({
    textContentType = 'password',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const onIconPress = useCallback(() => {
        setShowPassword(currentShowPassword => !currentShowPassword);
    }, [setShowPassword]);

    return (
        <Input
            {...props}
            secureTextEntry={!showPassword}
            icon={style => (
                <Icon {...style} name={showPassword ? 'eye-off' : 'eye'} />
            )}
            onIconPress={onIconPress}
            textContentType={textContentType}
        />
    );
};

export default PasswordInput;
