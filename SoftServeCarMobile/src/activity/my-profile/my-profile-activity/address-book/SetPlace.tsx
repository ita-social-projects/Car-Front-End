import React, { Component, useState } from 'react';
import { View,Text,Button, Alert,ScrollView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

class SetPlace extends Component {

      constructor(props: any){
        super(props);
    
        this.state = {
          coordinates: {
            latitude: 1,
            longitude: 1,
          }
        };
      }
      render(){
        const initialRegion ={ 
          latitude: 1,
          longitude: 1,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }
      return (
        <MapView 
          style={{ flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
        >
          <Marker draggable = {true}
          pinColor={"#000080"}
          onPress = {()=>{
            
          }}
          onDragEnd={(e)=>{
            this.state.coordinates = e.nativeEvent.coordinate;
            
          }}
           coordinate={{latitude: this.state.coordinates.latitude, longitude: this.state.coordinates.longitude}}
          />
        
        </MapView>
        )
      }
      
}


const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
    },
    SubContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    Mapbox: {
      flex: 1,
    },
  });


export default SetPlace;


