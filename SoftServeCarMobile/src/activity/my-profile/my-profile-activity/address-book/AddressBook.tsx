import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native';
import TouchableNavigationCard from '../../TouchableNavigationCard';
import { container } from 'tsyringe';
import AddressService from '../../../../../APIService/AddressService/AddressService';

const addressService = container.resolve(AddressService);

export default class AddressBook extends Component{
    constructor(props: any)
    {
        super(props);
    }
    getUserLocations(){
        
    }
      render()
      {
          return(
                <View>
                <TouchableNavigationCard navigation={this.props.navigation}
                  navigationName="SetPlace"
                  cardName="Home"
                  iconName="bookmark-outline"
                  angle="0"/>
              <TouchableNavigationCard navigation={this.props.navigation}
                  navigationName="SetPlace"
                  cardName="Work"
                  iconName="bookmark-outline"
                  angle="0" />
              <TouchableNavigationCard navigation={this.props.navigation}
                  navigationName="SetPlace"
                  cardName="Other"
                  iconName="star-outline"
                  angle="0" />
              </View>
          );
      }
    }
  
    const styles = StyleSheet.create(
      {
          container:
          {
              flex: 1,
              backgroundColor: '#eee',
              justifyContent: 'center',
              paddingTop: (Platform.OS == 'ios') ? 20 : 0
          },
      
          viewHolder:
          {
              height: 55,
              backgroundColor: '#26A69A',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 4
          },
      
          text:
          {
              color: 'white',
              fontSize: 25
          },
      
          btn:
          {
              position: 'absolute',
              right: 25,
              bottom: 25,
              borderRadius: 30,
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: 15
          },
      
          btnImage:
          {
              resizeMode: 'contain',
              width: '100%',
              tintColor: 'white'
          }
      });