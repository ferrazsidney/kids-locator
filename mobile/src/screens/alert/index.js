import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import siren from './../../assets/siren.png';
import BottomMenu from './../../components/bottomMenu';
import Menu from './../../components/menu';

export default function Home() {
    return(
        <View style={styles.container}>
            <Menu />
            <View style={styles.top}>                
                <Text style={styles.titulo}>Alerta sonoro</Text>
                <Image style={styles.image} source={siren} />
                <TouchableOpacity >                    
                    <View >
                        <Text style={styles.botton}>Tocar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomMenu}>                
                <BottomMenu />
            </View>            
        </View>
    );
}