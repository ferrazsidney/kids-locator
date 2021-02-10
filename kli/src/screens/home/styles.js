import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    
    linearGradient: {
        flex: 1,
        // alignItems: 'center'
    },

    titulo: {
        marginVertical: "30%",
        fontSize: 24,
        fontFamily: 'FivoSans-Thin',
        textAlign: 'center',
        color: '#4B4C4D',
    },

    subTitulo: {
        marginVertical: "20%",
        fontSize: 24,
        fontFamily: 'FivoSans-Thin',
        textAlign: 'center',
        color: '#FFFFFF',
    },

    input: {
        backgroundColor: '#FFFFFF',
        width: 205,
        height: 40,
        borderRadius: 8
    },

    botton: {
        backgroundColor: '#FFFFFF',
        width: 205,
        height: 56,
        margin: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },

    textBotton: {
        fontSize: 22,
        fontFamily: 'FivoSans-Thin',
        color: '#4B4C4D',
    },

    bottomMenu: {
        height: 60,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center'
    },

    middle: {
        alignItems: 'center'
    }
});