import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    bottomMenu: {
        height: 60,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between'
    },

    linearGradient: {
        flex: 1,
        // alignItems: 'center'
    },

    title: {
        fontSize: 25,
        fontFamily: 'FivoSans-Light',
        letterSpacing: 1.5,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: '5%',
        color: '#D7E8EF',
        paddingTop: 40
    },

    card: {
        width: '90%',
        height: 150,
        backgroundColor: '#D7E8EF',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textBotton: {
        fontFamily: 'FivoSans-Medium',
        fontSize: 18,
        color: '#D7E8EF'
    },

    personList: {
        marginTop: 30
    }
});