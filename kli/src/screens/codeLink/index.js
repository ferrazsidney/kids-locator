import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default function CodeLink() {
    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }>
                    <Text style={styles.titulo}>Código de Identificação de Usuário Mestre</Text>
                    <TextInput style={styles.input}/>
                    <TouchableOpacity style={styles.botton}>
                    <Text style={styles.textBotton}>Seguinte</Text>
                    </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}