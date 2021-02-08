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
        marginTop: 80
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
    },

    bottomMenu: {
        height: 70,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        bottom: 0
    }
});