/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component, useState} from 'react';
import ReactNative from 'react-native'
//import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Component1 = (props) => {
  return (
    <View>
      <Text>Value of string: {props.name}</Text>
    </View>
  );
}

class App extends Component{
  someVariable: number = 100;
  inputString: string = "str1";
  public isPressed : boolean = false;

  // <Component1 name = {this.inputString}/>
  render(){
    return (
      <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
        
        <TextInput
          style={{height: 40}}
          placeholder="Type here some text"
          onChangeText={inputString => inputString = inputString}
          defaultValue={this.inputString}
        />
       <Button
        onPress={() => {
          //this.inputString="Button pressed";
          this.isPressed  =true;
        }}
        title={!this.isPressed 
          ? this.inputString : "Button pressed" }
        />
          <Text style={styles.sectionTitle}>Variable: {this.someVariable}</Text>
          <Text style={styles.sectionTitle}>Variable: {!this.isPressed 
          ? this.inputString : "Button pressed" }</Text>
        </View>
      </View>
      </>
    );
  }

}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;


