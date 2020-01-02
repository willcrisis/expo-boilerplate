import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    form: {
        width: '100%'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    forgotPassword: {
        alignSelf: 'flex-end'
    },
    socialContainer: {
        alignItems: 'center'
    },
    socialButtons: {
        flexDirection: 'row'
    },
    socialButton: {
        color: 'white'
    }
});

export default styles;
