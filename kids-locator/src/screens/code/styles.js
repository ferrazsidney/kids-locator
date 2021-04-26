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

    name: {
        width: 220,
        height: 28,
        marginVertical: '20%'
    },
    
    image: {
        alignItems: 'center'
    },
    
    text: {
        fontSize: 17,
        fontFamily: 'FivoSans-Light',
        letterSpacing: 1.5,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: '5%',
        color: '#D7E8EF'
    },

    input: {
        backgroundColor: '#FFFFFF',
        width: 205,
        height: 55,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: '20%',
        backgroundColor: '#1D9FE8',
        color: '#D7E8EF',
        fontSize: 30,
        textAlign: 'center',
        paddingVertical: 3,
        letterSpacing: 9,
        fontFamily: 'FivoSans-Bold',
        fontWeight: 'bold'
    },

    botton: {
        width: 150,
        height: 45,
        backgroundColor: '#009657',
        marginVertical: '15%',
        alignSelf: 'center',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    textBotton: {
        fontFamily: 'FivoSans-Medium',
        fontSize: 18,
        color: '#D7E8EF'
    }
});