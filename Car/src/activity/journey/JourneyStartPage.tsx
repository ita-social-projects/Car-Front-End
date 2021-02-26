import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import Journey from "../../../models/Journey";
import AuthContext from "../../components/auth/AuthContext";
import JourneyCardList from "../../components/journey-card/JourneyCardList";
import JourneyStartPageStyle from "./JourneyStartPageStyle";
import TouchableNavigationBlock from "./touchable-navigation-block/TouchableNavigationBlock";

function JourneyStartPage(props: any) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [allButtonStyle, setAllButtonStyle] = useState(
        JourneyStartPageStyle.activeButton
    );
    const [pastButtonStyle, setPastButtonStyle] = useState(
        JourneyStartPageStyle.unactiveButton
    );
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(
        JourneyStartPageStyle.unactiveButton
    );
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(
        JourneyStartPageStyle.unactiveButton
    );

    const { user } = useContext(AuthContext);
    const [pastJourneys, setPastJourneys] = useState<Array<Journey>>([]);
    const [upcomingJourneys, setUpcomingJourneys] = useState<Array<Journey>>(
        []
    );
    const [scheduledJourneys, setScheduledJourneys] = useState<Array<Journey>>(
        []
    );

    useEffect(() => {
        JourneyService.getUpcomingJourneys(Number(user?.id)).then((res) =>
            setUpcomingJourneys(res.data)
        );

        JourneyService.getPastJourneys(Number(user?.id)).then((res1) =>
            setPastJourneys(res1.data)
        );

        JourneyService.getScheduledJourneys(Number(user?.id)).then((res2) =>
            setScheduledJourneys(res2.data)
        );
    }, [0]);

    return (
        <ScrollView style={JourneyStartPageStyle.page}>
            <View style={JourneyStartPageStyle.touchableNavigationBlocks}>
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Search Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
                    blockName="Search for a Journey"
                    from="#A5C500"
                    to="#00A977"
                    reverse={false}
                    width={150}
                    height={140}
                />
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Create Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-delivery-car-service.png")}
                    blockName="Create a Journey"
                    from="#00A3CF"
                    to="#5552A0"
                    reverse={true}
                    width={210}
                    height={140}
                />
            </View>
            <View style={JourneyStartPageStyle.manageJourneysContainer}>
                <Text style={JourneyStartPageStyle.manageJourneysText}>
                    Manage journeys
                </Text>
            </View>
            <View style={JourneyStartPageStyle.segmentControlContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStartPageStyle.allJourneys, allButtonStyle]}
                    onPress={() => {
                        setSelectedIndex(0);
                        setAllButtonStyle(JourneyStartPageStyle.activeButton);
                        setPastButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setUpcomingButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setScheduledButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            allButtonStyle
                        ]}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.pastJourneys,
                        pastButtonStyle
                    ]}
                    onPress={() => {
                        setSelectedIndex(1);
                        setAllButtonStyle(JourneyStartPageStyle.unactiveButton);
                        setPastButtonStyle(JourneyStartPageStyle.activeButton);
                        setUpcomingButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setScheduledButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            pastButtonStyle
                        ]}
                    >
                        Past
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.upcomingJourneys,
                        upcomingButtonStyle
                    ]}
                    onPress={() => {
                        setSelectedIndex(2);
                        setAllButtonStyle(JourneyStartPageStyle.unactiveButton);
                        setPastButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setUpcomingButtonStyle(
                            JourneyStartPageStyle.activeButton
                        );
                        setScheduledButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            upcomingButtonStyle
                        ]}
                    >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.scheduledJourneys,
                        scheduledButtonStyle
                    ]}
                    onPress={() => {
                        setSelectedIndex(3);
                        setAllButtonStyle(JourneyStartPageStyle.unactiveButton);
                        setPastButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setUpcomingButtonStyle(
                            JourneyStartPageStyle.unactiveButton
                        );
                        setScheduledButtonStyle(
                            JourneyStartPageStyle.activeButton
                        );
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            scheduledButtonStyle
                        ]}
                    >
                        Scheduled
                    </Text>
                </TouchableOpacity>
            </View>

            {selectedIndex === 0 && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {upcomingJourneys.length > 0 && (
                        <Text style={JourneyStartPageStyle.tabTextStyle}>
                            Upcoming
                        </Text>
                    )}
                    {<JourneyCardList journey={upcomingJourneys} />}

                    {pastJourneys.length > 0 && (
                        <Text style={JourneyStartPageStyle.tabTextStyle}>
                            Past
                        </Text>
                    )}
                    {<JourneyCardList journey={pastJourneys} />}

                    {scheduledJourneys.length > 0 && (
                        <Text style={JourneyStartPageStyle.tabTextStyle}>
                            Scheduled
                        </Text>
                    )}
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
            {selectedIndex === 1 && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={pastJourneys} />}
                </View>
            )}
            {selectedIndex === 2 && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={upcomingJourneys} />}
                </View>
            )}
            {selectedIndex === 3 && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
        </ScrollView>
    );
}

export default JourneyStartPage;
