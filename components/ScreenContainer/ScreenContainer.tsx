import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleProp, ScrollView } from 'react-native';
import { Layout, LayoutProps } from 'react-native-ui-kitten';
import styles from './ScreenContainer.style';

type Props = LayoutProps & {
    centeredHorizontal?: boolean;
    centeredVertical?: boolean;
    centered?: boolean;
    paddedHorizontal?: boolean;
    paddedVertical?: boolean;
    padded?: boolean;
    pure?: boolean;
};

const ScreenContainer: FunctionComponent<PropsWithChildren<Props>> = ({
    children,
    centeredHorizontal,
    centeredVertical,
    centered,
    paddedHorizontal,
    paddedVertical,
    padded,
    pure,
    style,
    ...props
}) => {
    const appliedStyles: Array<StyleProp<{}>> = [styles.container, style];
    if (centered) {
        appliedStyles.push(styles.centeredHorizontal, styles.centeredVertical);
    } else {
        if (centeredHorizontal) {
            appliedStyles.push(styles.centeredHorizontal);
        }
        if (centeredVertical) {
            appliedStyles.push(styles.centeredVertical);
        }
    }

    if (padded) {
        appliedStyles.push(styles.paddedHorizontal, paddedVertical);
    } else {
        if (paddedHorizontal) {
            appliedStyles.push(styles.paddedHorizontal);
        }
        if (paddedVertical) {
            appliedStyles.push(styles.paddedVertical);
        }
    }

    const Component = pure ? (
        <ScrollView contentContainerStyle={appliedStyles}>
            {children}
        </ScrollView>
    ) : (
        <Layout style={appliedStyles} {...props}>
            {children}
        </Layout>
    );

    return Component;
};

export default ScreenContainer;
