import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import BottomPopup from '../../../../components/bottom-popup/BottomPopup';
import {TouchableJourneyStyle} from './TouchableJourneyStyle';
import * as RootNavigation from '../../../../components/navigation/RootNavigation';

const JourneyPage = () => {
  const content = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: Dimensions.get('window').height / 2,
        }}>
        <View>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
              <Image
                style={TouchableJourneyStyle.image}
                source={require('../../../../../images/default-user-photo.jpg')}
              />
              <View style={{flexDirection: 'column'}}>
                <Text>Maria Kruselnytska's journey</Text>
                <Text>Experience Designer</Text>
              </View>
              <View>
                <Text>Today at 19:15</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <BottomPopup
        style={{backgroundColor: 'white'}}
        snapPoints={[
          '50%',
          '45%',
          '40%',
          '35%',
          '30%',
          '25%',
          '20%',
          '15%',
          '10%',
        ]}
        renderContent={content}
        initialSnap={0}></BottomPopup>
    </>
  );
};

export default JourneyPage;
