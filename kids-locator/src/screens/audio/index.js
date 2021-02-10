import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import BottomMenu from './../../components/bottomMenu';
import Menu from './../../components/menu';

export default function Home() {
    return(
        <View style={styles.container}>
            <Menu />
            <View style={styles.top}>                
                <Text style={styles.titulo}>Ouvir Áudio</Text>
                
                <View style={styles.circle}/>

                <TouchableOpacity >                    
                    <View >
                        <Text style={styles.botton}>Ouvir</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomMenu}>                
                <BottomMenu />
            </View>            
        </View>
    );
}