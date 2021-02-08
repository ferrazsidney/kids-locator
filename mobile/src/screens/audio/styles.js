import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEDF3"
    },

    top: {
        alignItems: 'center'
    },

    titulo: {
        color: "#4B4C4D",
        fontSize: 24,
        marginTop: 80,
        fontFamily: 'FivoSans-Thin'
    },

    botton: {
        color: "#FFFFFF",
        fontSize: 24,
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "#0827C7",
        borderRadius: 23,
        fontFamily: 'FivoSans-Thin'
    },

    bottomMenu: {
        height: 60,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderWidth: 1.5,
        borderColor: '#0827C7',
        margin: '35%'        
    }
});