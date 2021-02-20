import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import TouchableMapBar from "../touchable/map-bar/TouchableMapBar";

const MapGetAddress = () => {
    const mapStyle = [
        {
            featureType: "poi.business",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ];
    return (
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude: 49.843844,
                longitude: 24.025581,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            customMapStyle={mapStyle}
        ></MapView>
        //     <View>
        //     <View style={styles.box1}></View>
        //     <View style={styles.box2}></View>
        //  </View>
    );
};
const styles = StyleSheet.create({
    box1: {
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        zIndex: 1
    },
    box2: {
        height: "100%",
        width: "100%",
        backgroundColor: "green",
        position: "absolute",
        zIndex: 0
    }
});

export default MapGetAddress;
