import {Platform, StyleSheet, View} from "react-native";
import {OpenSans, ProximaNova} from "../../../font-manager";
import EStyleSheet from "react-native-extended-stylesheet";

export let item = function (percent: number) {
    return {
        width: percent + '%'
    }
}
export const style = EStyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
        , borderWidth: 1
        , borderColor: "rgba(151, 151, 151, 0.233556)"
        , borderStyle: "solid"
        , borderTopLeftRadius: 16
        , borderTopRightRadius: 16
        , borderBottomRightRadius: 16
        , borderBottomLeftRadius: 16
        , minHeight: '90%'
        , margin: 10
        , paddingTop: 23
        , paddingBottom: 23
        , paddingLeft: 25
        , paddingRight: 25
        , shadowColor: "#414045"
        , shadowOffset: {
            width: 0,
            height: 16,
        }
        , shadowOpacity: 0.2
        , shadowRadius: 6.27

        , elevation: 10
    }
    , circle: {
        backgroundColor: "#A5C500"
        , borderRadius: 90
        , height: 57
        , width: 57
        , display: "flex"
        , alignItems: "center"
        , justifyContent: 'center'
        , marginTop: 5
    }
    , row: {
        flex: 0
        , flexDirection: 'row'
        , flexWrap: 'wrap'
        , alignItems: 'flex-start'

    }
    , title: {
        marginTop: 32
    }
    , header: {
        fontFamily: ProximaNova.Bold
        , fontSize: '1rem'
        , lineHeight: 16
        , display: "flex"
        , alignItems: "center"
        , letterSpacing: 0.2
        , textTransform: "uppercase"
        , color: "#000000"
    }
    , snooze: {
        fontFamily: ProximaNova.Bold
        , fontSize: '1rem'
        , lineHeight: 16
        , display: "flex"
        , alignItems: "center"
        , textAlign: 'right'
        , letterSpacing: 0.875
        , textTransform: "capitalize"
        , color: "#02A2CF"
    }
    , ellipse: {
        width: 100,
        height: 100
    }
    , icon: {
        fontFamily: OpenSans.Bold
        , fontSize: '0.9375rem'
        , lineHeight: 16
        , display: "flex"
        , alignItems: "center"
        , textAlign: 'center'
        , textTransform: "uppercase"
        , color: '#ffffff'
    }
    , profile: {
        //alignItems: "center"
         textAlign: 'left'
        , marginLeft: 10
    }
    , name: {
        fontFamily: ProximaNova.Bold
        , fontSize: '1.1rem'
        , lineHeight: 21
        , color: '#000000'
    }
    , bio: {
        fontFamily: ProximaNova.Regular
        , fontSize: '0.85rem'
        , lineHeight: 14
        , color: '#000000'
        , opacity: 0.5
        //, mixBlendMode: 'normal'
        , marginTop: '0.7rem'
    }
    , achievements: {
        fontFamily: ProximaNova.Regular
        , fontSize: 15
        , lineHeight: 14
        , color: '#000000'
        , opacity: 0.5
        //, mixBlendMode: 'normal'
        , marginTop: '0.7rem'
    }
    , more: {
        fontFamily: OpenSans.ExtraBold
        , fontSize: 20
        //, fontWeight: '900'
        , letterSpacing: 3
        //, lineHeight: 50
        , marginTop: -10
        , paddingTop: 0
        , color: '#000000'
    }
    , commentsBox: {
        borderWidth: 1
        , borderColor: 'rgba(151, 151, 151, 0.3)'
        , borderStyle: "solid"
        , backgroundColor: '#ffffff'
        , marginTop: '1.5rem'
    }
    , commentsBoxAfter:{
        position: 'absolute'
        , width: '1rem'
        , height: '1rem'
        , borderWidth:1
        , borderStyle: 'solid'
        //, borderColor: '#000000'
        //, borderTopColor: '#ffffff'
        , borderTopColor: 'rgba(0,0,0,0)'
        , borderLeftColor: 'rgba(0,0,0,0)'
        , borderRightColor: 'rgba(151, 151, 151, 0.3)'
        , borderBottomColor: 'rgba(151, 151, 151, 0.3)'

        , top: '-0.5rem'
        , left: '50%'
        , marginLeft: '-1rem'
        , transform: [
            {rotateZ: '-135deg'}
        ]
        //, marginTop: '-2.8rem'
        , backgroundColor: '#ffffff'
        , opacity: 1
    }
    , commentsText:{
        margin: '1.5rem'
        , textAlign: 'center'
        , fontFamily: ProximaNova.Regular
        , fontSize: '1.2rem'
        , paddingLeft: '1rem'
        , paddingRight: '1rem'
    }
    , options:{
        marginTop: '1.5rem'
    }
    , optionsHeader:{
        fontFamily: OpenSans.Bold
        , lineHeight: '1.1rem'
        , fontSize: '1rem'
    }
    , optionsValue:{
        fontFamily: OpenSans.Regular
        , lineHeight: '1.2rem'
        , fontSize: '1rem'
        , marginTop: '0.5rem'
    }
    , optionsLine:{
        minHeight:10
        , minWidth:'99%'
        , borderWidth: 1
        , borderTopColor: 'rgba(0,0,0,0)'
        , borderLeftColor: 'rgba(0,0,0,0)'
        , borderRightColor: 'rgba(0,0,0,0)'
        , borderBottomColor: '#C1C1C5'
        , borderStyle: "solid"
        , backgroundColor: '#ffffff'
        , marginLeft: 'auto'
        , marginRight: 'auto'
    }
    , stopsHeader:{
        fontFamily: OpenSans.Bold
        , lineHeight: '1.1rem'
        , fontSize: '1rem'
    }



});

