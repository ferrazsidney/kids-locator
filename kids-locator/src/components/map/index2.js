import React, { useState, useEffect, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { UserState } from 'realm';
import io from 'socket.io-client';
import getRealm from '../../services/realm';

const Map = () => {
    // const[codigo, setCodigo] = useState('1');
    const [position, setPosition] = useState({"latitude":-14.882171,"longitude":-40.863004});    
    const [positionAux, setPositionAux] = useState({"latitude":-14.8908469,"longitude":-40.8678974});    
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [region, setRegion] = useState({
        latitude: position.latitude,
        longitude: position.longitude,
        // latitude: -14.890730,
        // longitude: -40.867755,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
    });
    // getCode;
    // console.log(codigo);
    // const socket = io("http://191.252.178.120:3000");
    // socket.emit('joinMaster', codigo);
    // socket.on('locator', locator => {
        //     console.log("teste");
        //     console.log(locator);
        // });
    useEffect(() => {
        getCode().then((code) => {            
            console.log("useEfect");
            // getCode;
            const socket = io("http://191.252.178.120:3000");
            console.log(code);
            socket.emit('joinMaster', code);
            socket.on('locator', locator => {
                setPositionAux(position)
                setPosition(locator);
                console.log("teste");
                console.log(locator);
            });
        });
    },[]);
    
    const getCode = async() => {
        try{
            const realm = await getRealm();
            const data = await realm.objectForPrimaryKey("Database", 1);
            const code = data.code;
            // setCodigo(code);
            console.log(code+' 1');
            return code;
        }catch(error){
            alert(error);
        }
    }

    
    
    return(
        <MapView         
            style={{flex: 1}}
            initialRegion={region}
            onRegionChangeComplete={region => setRegion(region)}
            >
            {position.latitude != null  || position.longitude != null                
                ?                    
                    <Marker                 
                        coordinate={position}
                        // coordinate={{latitude: -14.890730, longitude: -40.867755}}
                        image={require('../../assets/marker3x.png')}                        
                    >
                            {/* {setPositionAux(position)} */}
                    </Marker>                                    
                :
                    <Marker                 
                    coordinate={positionAux}
                    // coordinate={{latitude: -14.890730, longitude: -40.867755}}
                    image={require('../../assets/marker3x.png')}
                    >

                    </Marker>
            }
        </MapView>
    );
};

export default Map;