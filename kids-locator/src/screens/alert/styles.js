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
    
    image: {
        width: 110,
        height: 123,
        marginVertical: 90,
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
    }
});