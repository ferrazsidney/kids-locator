import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import getRealm from '../../services/realm';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Code() {
    
    const [codigo, setCodigo] = useState('');
    const navigation = useNavigation();
    
    function navigateToHome() {
        try{
            const responseNewUser = api.post('new-user', { //Envia uma requisição para o servidor, que salva no banco de dados o novo código de usuário gerado
                data: {
                    codeUser: codigo
                }
            });
        }catch(error){
            alert(error);
        }

        navigation.navigate('UserPanel');
    }

    useEffect(() => {
        saveData();
        //getData();
    },[]);

    const saveData = async () => {
        const code = makeId(5); //Gera código de 5 digitos

        const response = await api.post('user', { //Envia uma requisição para o servidor que faz a consulta no banco de dados que verifica se o código gerado já existe
            data: {
                codeUser: code
            }
        });

        console.log("Resposta da consulta ao banco de dados: "+response.data);

        // if (response.data == ""){ //Se a reposta da requisição for um arrei vazio significa que o código gerado não existe no banco de dados
        //     console.log("Novo código gravado no Database: "+code);
        //     const responseNewUser = await api.post('new-user', { //Envia uma requisição para o servidor, que salva no banco de dados o novo código de usuário gerado
        //         data: {
        //             codeUser: code
        //         }
        //     });
        // }else{
        if(response.data != ""){//Se a reposta da requisição não for uma string vazia significa que o código gerado não existe no banco de dados
            while (response.data != ""){ //Se a reposta da requisição não for um arrei vazio significa que o código gerado existe no banco de dados, então gera-se codigos até encontrar um não usado
                code = makeId(5); //Gera código de 5 digitos

                response = await api.post('user', { //Envia uma requisição para o servidor que faz a consulta no banco de dados que verifica se o código gerado já existe
                    data: {
                        codeUser: code
                    }
                });
            }

            // const responseNewUser = await api.post('user', { //Envia uma requisição para o servidor, que salva no banco de dados o novo código de usuário gerado
            //     data: {
            //         codeUser: code
            //     }
            // });
        }
        
        const data = {
            id: 1,
            code: code,
        }

        console.log("O objeto gerado com id: 1 e code: "+data.code);

        try {
            const realm = await getRealm();
            realm.write(() => {
                realm.create('Database', data);
            });
        }catch(error){
            alert(error);
        }

        getData();
    }

    const getData = async () => {
        try{
            const realm = await getRealm();
            const data = await realm.objectForPrimaryKey("Database", 1);
            const code = data.code;
            setCodigo(code);
        }catch(error){
            alert(error);
        }
    }

    const makeId = (length) => {
        var result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random()*charactersLength));
        }
        
        return result;
    }

    return(
        <View style={styles.container}> 
            <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }
            > 
            <View style={styles.image}>
                <Image style={styles.name} source={require('../../assets/name.png')} />
            </View> 
            <Text style={styles.text}>Esse código é seu identificador. O próximo passo é instalar o aplicativo 
                KLI no smartphone que você deseja monitorar a localização.
            </Text>
            <TextInput 
                style={styles.input}
                value= {codigo}
                onChangeText = {(text) => setCodigo(text)}
            />
            <TouchableOpacity 
                style={styles.botton}
                onPress={navigateToHome}
            >
                <Text style={styles.textBotton}>Ok, entendi !</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}