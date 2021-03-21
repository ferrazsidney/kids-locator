import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import getRealm from '../../services/realm'
import { useNavigation } from '@react-navigation/native';

export default function CodeLink() {    

    const navigation = useNavigation();

    const [codigo, setCodigo] = useState('');

    const saveData = async () => {
        const data = {
            id: 1,
            code: codigo,
        };

        try{
            const realm = await getRealm();
            // console.log(teste1);
    
            // realm.write(() => {
            //     const repository = realm.objects("Repository")[0];

            //     repository.code = codigo;
            // });  
            realm.write(() => {
                realm.create('Repository', data);
            });  
        }catch(error){
            alert(error);
        }
    }

    const storeData = async() => {
        try{
            // await AsyncStorage.setItem(
            //     "@KLI_CIUM",
            //     codigo
            // );
            // Keyboard.dismiss();
            await saveData();
            //await getData();
            setCodigo('');
            navigation.navigate('home');
        }catch(error){
            alert(error);
        }
    }
    
    const getData = async() => {
        const realm = await getRealm();
        
        // const data = realm.objectForPrimaryKey("Repository", 1);
        // const data = realm.objects("Repository");
        const data = await realm.objectForPrimaryKey("Repository", 1);
        console.log(data.code);
    }


    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }>
                    <Text style={styles.titulo}>Código de Identificação de Usuário Mestre</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText = {(text) => setCodigo(text)}
                    />
                    <TouchableOpacity                        
                        style={styles.botton}
                        onPress={ storeData }
                    >
                    <Text style={styles.textBotton}>Seguinte</Text>
                    </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}