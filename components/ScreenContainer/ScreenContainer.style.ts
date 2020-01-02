import { StyleSheet } from 'react-native';
import { measures } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    centeredHorizontal: {
        alignItems: 'center'
    },
    centeredVertical: {
        justifyContent: 'center'
    },
    paddedHorizontal: {
        paddingHorizontal: measures.padding
    },
    paddedVertical: {
        paddingVertical: measures.padding
    }
});

export default styles;
