import React, { FunctionComponent } from 'react';
import { Button as KittenButton, ButtonProps } from 'react-native-ui-kitten';
import styles from './Button.styles';

export type ButtonExtendedProps = ButtonProps & {
    fullWidth?: boolean;
};

const Button: FunctionComponent<ButtonExtendedProps> = ({
    fullWidth,
    style,
    ...props
}) => {
    const appliedStyles = [style];

    if (fullWidth) {
        appliedStyles.push(styles.fullWidth);
    }

    return <KittenButton style={appliedStyles} {...props} />;
};

export default Button;
