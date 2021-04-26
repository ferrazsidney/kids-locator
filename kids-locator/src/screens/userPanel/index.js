import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import getRealm from '../../services/realm';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import BoottomMenu from '../../components/bottomMenu';
import Menu from '../../components/menu';
import Map from '../../components/map';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { Collection } from 'realm';
import { AnimatedRegion } from 'react-native-maps';

export default function Code() { 

    const navigation = useNavigation();

    const [collection, setCollection] = useState([]);
    // const screen = Dimensions.get('window');
    // const ASPECT_RATIO = screen.width / screen.height;
    // const locator = new AnimatedRegion({
    //     latitude: -14.847587,
    //     longitude: -40.884225,
    //     latitudeDelta: 0.0243,
    //     longitudeDelta: 0.0234 * ASPECT_RATIO,
    //   });

function navigateToHome() {
    navigation.navigate('Home');
}

    useEffect(() => {
        //saveData();
        getData();
    },[]);
    
    const getData = async () => { // Função que acessa a base de dados local para obter todos os usuários rastreados cadastrados
        try{
            const realm = await getRealm();
            const data = await realm.objects("Database");
            // for(let p of data){
                
            //     console.log("Base de dados local: "+p.code);
            // }
            // const d = JSON.parse(data);
            setCollection(data);
            console.log("Base de dados local: "+data[0].code);
        }catch(error){
            alert(error);
        }
    }


    return(
        <View style={styles.container}> 
            <LinearGradient 
                colors={['#30E9FF', '#0D0551']} 
                style={styles.linearGradient}
                start = { { x : 0 ,  y : 0 } }
                end = { { x : 1 ,  y : 1 } }
            >             
            <Menu />
            <Text style={styles.title}>Usuários</Text>    
            <FlatList 
                data={collection}
                style={styles.personList}
                keyExtractor={person => String(person.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: person}) => (
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={navigateToHome}
                    >
                        <Map code={person.code}/>
                    </TouchableOpacity>
                )}
            />        
            <View style={styles.bottomMenu}>                
                <BoottomMenu />
            </View>
            </LinearGradient>
        </View>
    );
}