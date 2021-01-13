import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import TouchableNavigationBlock from './TouchableNavigationBlock'
import SegmentedControlTab from "react-native-segmented-control-tab";
import AllJourney from './journeyActivity/segmentControlActivities/AllJourneys'
import PastJourney from './journeyActivity/segmentControlActivities/PastJourneys'
import UpcomingJourney from './journeyActivity/segmentControlActivities/UpcomingJormeys'
import ScheduledJourney from './journeyActivity/segmentControlActivities/ScheduledJourneys'
import JourneyStyle from './JourneyStyle';

function Journey(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ScrollView style={JourneyStyle.page}>
      <TouchableNavigationBlock navigation={props.navigation}
        navigationName="Search Journey"
        blockImage={require("../../../images/journey/bermuda-searching.png")}
        blockName="Search for a Journey"
        from="#A5C500"
        to="#00A977"
        reverse={false}
        width={150}
        height={140} />
      <TouchableNavigationBlock navigation={props.navigation}
        navigationName="Create Journey"
        blockImage={require("../../../images/journey/bermuda-delivery-car-service.png")}
        blockName="Create a Journey"
        from="#00A3CF"
        to="#5552A0"
        reverse={true}
        width={210}
        height={140} />
      <Text>Manage journeys</Text>
      <SegmentedControlTab
        values={["All", "Past", "Upcoming", "Scheduled"]}
        selectedIndex={selectedIndex}
        onTabPress={(index) => {
          setSelectedIndex(index);
        }}
      />
      {selectedIndex === 0 && (<View><AllJourney /></View>)}
      {selectedIndex === 1 && (<View><PastJourney /></View>)}
      {selectedIndex === 2 && (<View><UpcomingJourney /></View>)}
      {selectedIndex === 3 && (<View><ScheduledJourney /></View>)}
    </ScrollView>
  )
}

export default Journey;
