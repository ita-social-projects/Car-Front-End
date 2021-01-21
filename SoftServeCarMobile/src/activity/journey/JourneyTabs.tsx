import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, Image, Pressable} from 'react-native';
import CreateJourney from './journey-activity/CreateJourney';
import SearchJourney from './journey-activity/SearchJourney';
import Journey from './Journey';
import JourneyPage from './journey-activity/segment-control-activities/JourneyPage';
import JourneyStyle from './JourneyStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../../components/navigation/RootNavigation';

const StackTabs = createStackNavigator();

const JourneyTabs = (props: any) => {
  return (
    <View style={JourneyStyle.tabsStyle}>
      <StackTabs.Navigator>
        <StackTabs.Screen
          name="Journey"
          component={Journey}
          options={{headerTitleAlign: 'center'}}
        />
        <StackTabs.Screen name="Create Journey" component={CreateJourney} />
        <StackTabs.Screen name="Search Journey" component={SearchJourney} />
        <StackTabs.Screen
          name="Journey Page"
          component={JourneyPage}
          options={{
            title: 'Journey',
            headerStyle: {},
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Open-Sans-Regular',
              fontWeight: '700',
              fontSize: 16,
            },
            headerLeft: () => (
              <Pressable
                style={{marginLeft: 10, flexDirection: 'row'}}
                onPress={() => {
                  navigate('Journey', {});
                }}>
                <Image
                  source={require('../../../images/left-arrow.png')}
                  style={{height: 20, padding: 1, marginTop: 1}}
                />
                <Text
                  style={{
                    color: '#02A2CF',
                    fontFamily: 'Open-Sans-Regular',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 3,
                  }}>
                  Back
                </Text>
              </Pressable>
            ),
          }}
        />
      </StackTabs.Navigator>
    </View>
  );
};
export default JourneyTabs;
