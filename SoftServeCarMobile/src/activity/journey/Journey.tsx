import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import TouchableNavigationBlock from './touchable-navigation-block/TouchableNavigationBlock'
import SegmentedControlTab from "react-native-segmented-control-tab";
import AllJourneys from './journey-activity/segment-control-activities/journey-page/tabs/all-journeys/AllJourneys'
import PastJourneys from './journey-activity/segment-control-activities/journey-page/tabs/past-journeys/PastJourneys'
import UpcomingJourneys from './journey-activity/segment-control-activities/journey-page/tabs/upcoming-journeys/UpcomingJourneys'
import ScheduledJourneys from './journey-activity/segment-control-activities/journey-page/tabs/scheduled-journeys/ScheduledJourneys'
import JourneyStyle from './JourneyStyle';

function Journey(props: any) {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ScrollView style={JourneyStyle.page}>
      <TouchableNavigationBlock navigation={props.navigation}
        navigationName="Search Journey"
        blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
        blockName="Search for a Journey"
        from="#A5C500"
        to="#00A977"
        reverse={false}
        width={150}
        height={140} />
      <TouchableNavigationBlock navigation={props.navigation}
        navigationName="Create Journey"
        blockImage={require("../../../assets/images/journey/bermuda-delivery-car-service.png")}
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
      {selectedIndex === 0 && (<View><AllJourneys /></View>)}
      {selectedIndex === 1 && (<View><PastJourneys /></View>)}
      {selectedIndex === 2 && (<View><UpcomingJourneys /></View>)}
      {selectedIndex === 3 && (<View><ScheduledJourneys /></View>)}
    </ScrollView>
  )
}

export default Journey;
