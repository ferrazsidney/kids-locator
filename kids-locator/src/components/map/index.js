import React, { useEffect } from 'react';
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

import api from '../../services/api';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -14.890730;
const LONGITUDE = -40.867755;
const LATITUDE_DELTA = 0.0243;
const LONGITUDE_DELTA = 0.0234 * ASPECT_RATIO;


class AnimatedMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //coordinate: props.coordinate,
      code: props.code,
      //code: "x8EeU",
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };
  }



  componentDidMount(){
    this.getCode().then((code) => {            
        console.log("useEfect");
        // getCode;
        const socket = io("http://191.252.178.120:3000");
        console.log(code);
        socket.emit('joinMaster', code);
        socket.on('locator', locator => {
            const position = JSON.parse(locator);            
            const { coordinate } = this.state;
            // const newCoordinate = {
            // latitude: locator.latitude,
            // longitude: locator.longitude,
            // };
            console.log(position);
            const newCoordinate = position;            

            if (Platform.OS === 'android') {
            if (this.marker) {
                this.marker.animateMarkerToCoordinate(newCoordinate, 500);
            }
            } else {
            coordinate.timing(newCoordinate).start();
            }
            console.log("teste");
            console.log(locator);
        });
      }); 
      const locator = this.getLastLocator();
    }
    
    async getCode(){
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

  async getLastLocator(){
    try{
      const response = await api.post('last-locator', {
        // data: {
          "codigo": this.state.code,
        // }
      });
      console.log("A localização vinda do servidor é: "+response.data[0].latitude);
      this.setState({coordinate: new AnimatedRegion({
        latitude: response.data[0].latitude,
        longitude: response.data[0].longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      })});
      return response.data[0];
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

  render() {
    return (
      <View style={styles.container}>
        <MapView.Animated
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.coordinate
            // {
            //   latitude: LATITUDE,
            //   longitude: LONGITUDE,
            //   latitudeDelta: LATITUDE_DELTA,
            //   longitudeDelta: LONGITUDE_DELTA,
            // }
          }
        >
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}                        
          />
        </MapView.Animated>
      </View>
    );
  }
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