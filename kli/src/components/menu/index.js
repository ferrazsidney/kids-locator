import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function BoottomMenu() {
    Icon.loadFont();
    return(
        <View style={styles.menu}>
            <TouchableOpacity>                
                <Icon name="bars" size={30} color="#4B4C4D" />
            </TouchableOpacity>
        </View>
    );
}