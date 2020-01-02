import React, { FunctionComponent, PropsWithChildren } from 'react';
import { View } from 'react-native';
import styles from './Spacer.styles';

const Spacer: FunctionComponent<PropsWithChildren<{}>> = () => (
    <View style={styles.spacer} />
);

export default Spacer;
