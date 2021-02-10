import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Map from '../../components/map';
import BoottomMenu from '../../components/bottomMenu';
import Menu from '../../components/menu';

export default function Home() {
    return(
        <View style={styles.container}>
            <Map />
            <Menu />
            <View style={styles.bottomMenu}>                
                <BoottomMenu />
            </View>
        </View>
    );
}