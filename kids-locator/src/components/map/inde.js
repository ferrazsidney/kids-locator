import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';

import MapView, {
  ProviderPropType,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';

import getRealm from '../../services/realm';

import io from 'socket.io-client';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -14.890730;
const LONGITUDE = -40.867755;
const LATITUDE_DELTA = 0.0243;
const LONGITUDE_DELTA = 0.0234 * ASPECT_RATIO;

const AnimatedMarkers = () => {
  
  const [coordinate, setCoordinate] = useState(new AnimatedRegion({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }));


    useEffect(() => {
        getCode().then((code) => {            
            console.log("useEfect");
            // getCode;
            const socket = io("http://191.252.178.120:3000");
            console.log(code);
            socket.emit('joinMaster', code);
            socket.on('locator', locator => {
                const position = JSON.parse(locator);        
                // const newCoordinate = {
                // latitude: locator.latitude,
                // longitude: locator.longitude,
                // };
                console.log(position);
                const newCoordinate = position;            
    
                if (Platform.OS === 'android') {
                if (marker) {
                    marker.animateMarkerToCoordinate(newCoordinate, 500);
                }
                } else {
                coordinate.timing(newCoordinate).start();
                }
                console.log("teste");
                console.log(locator);
            });
        });
    },[]);
  

  async function getCode(){
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


//   animate() {
//     const { coordinate } = this.state;
//     const newCoordinate = {
//       latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
//       longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
//     };

//     if (Platform.OS === 'android') {
//       if (this.marker) {
//         this.marker.animateMarkerToCoordinate(newCoordinate, 500);
//       }
//     } else {
//       coordinate.timing(newCoordinate).start();
//     }
//   }

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker.Animated
            ref={marker => {
              marker = marker;
            }}
            coordinate={coordinate}                        
          />
        </MapView>
      </View>
    );
}

AnimatedMarkers.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default AnimatedMarkers;