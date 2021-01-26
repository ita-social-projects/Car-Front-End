import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, Image, Pressable, StyleSheet} from 'react-native';
import CreateJourney from './journey-activity/CreateJourney';
import SearchJourney from './journey-activity/SearchJourney';
import Journey from './Journey';
import JourneyPage from './journey-activity/segment-control-activities/JourneyPage';
import JourneyStyle from './JourneyStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../../components/navigation/RootNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useWindowDimensions} from 'react-native';

import JourneyApplicant from './journey-activity/segment-control-activities/JourneyApplicant';

const StackTabs = createStackNavigator();

const JourneyTabs = (props: any) => {
  const {width, height} = useWindowDimensions();
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
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButtonOpacity}
                onPress={() => {
                  navigate('Journey', {});
                }}>
                <Ionicons
                  name={'chevron-back-outline'}
                  size={35}
                  color={'#02A2CF'}
                />
                <View style={styles.backButtonTextView}>
                  <Text style={styles.backButtonText}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
          }}
        />
      </StackTabs.Navigator>
      <StackTabs.Screen name="Applicant Page" component={JourneyApplicant}/>
    </View>
  );
};

export default JourneyTabs;

const styles = StyleSheet.create({
  backButtonOpacity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButtonTextView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#02A2CF',
    fontFamily: 'Open-Sans-Regular',
    fontSize: 20,
    fontWeight: '700',
  },
  headerTitleStyle: {
    fontFamily: 'Open-Sans-Regular',
    fontWeight: '700',
    fontSize: 20,
  },
});
