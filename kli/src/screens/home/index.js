import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import AbracoSvg from './../../assets/svg/abraco.svg';
import Menu from './../../components/menu';
import BottomMenu from './../../components/bottomMenu';

export default function CodeLink() {
    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }>
                    <Menu />
                    <View style={styles.middle}>
                        <Text style={styles.titulo}>Perto mesmo estando Longe!</Text>
                        <AbracoSvg width={145} height={145} />
                        <Text style={styles.subTitulo}>Como é bom cuidar de quem amamos!</Text>
                    </View>
                    <View style={styles.bottomMenu}>                
                        <BottomMenu />
                    </View>
            </LinearGradient>
        </View>
    );
}