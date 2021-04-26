import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import getRealm from '../../services/realm';
import { useNavigation } from '@react-navigation/native';

export default function Init() {
    
    const navigation = useNavigation();

    useEffect(() => {
        getData();
    },[]);

    const navigationToHome = () => {
        navigation.navigate("Home");
    }

    const navigationToPanel = () => {
        navigation.navigate("UserPanel");
    }
    
    const navigationToCode = () => {
        navigation.navigate("Code");        
    }

    const getData = async () => {
        try{
            const realm = await getRealm();
            const data = await realm.objectForPrimaryKey("Database", 1);
            const code = data.id;
            if(code == 1)
                navigationToPanel();
        }catch(error){
            // alert(error);
            navigationToCode();
        }
    }

    return(
        <View style={styles.container}> 
            {/* <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }
            > 
            
            </LinearGradient> */}
        </View>
    );
}