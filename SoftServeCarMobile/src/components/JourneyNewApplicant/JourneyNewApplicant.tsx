import React from 'react'
import {View, Text, Button, Image, Platform} from 'react-native'
import {style, item, Circle} from './JourneyNewApplicantStyle'
import TouchableNavigationBlockStyle from "../../activity/journey/TouchableNavigationBlockStyle";
import LinearGradient from "react-native-linear-gradient";
import {LinearTextGradient} from 'react-native-text-gradient';
import {OpenSans} from "../../../font-manager";

export const JourneyNewApplicant = () => {
    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={item(50)}>
                    <Text style={style.header}>
                        New Applicant
                    </Text>
                </View>
                <View style={item(50)}>
                    <Text style={style.snooze}>
                        Snooze
                    </Text>
                </View>
            </View>
            <View style={[style.row, style.title]}>

                <View style={item(20)}>
                    <View style={style.circle}>
                        <Text style={style.icon}>
                            JB
                        </Text>
                    </View>
                </View>
                <View style={item(70)}>
                    <View style={style.profile}>
                        <Text style={style.name}>
                            Jaylon Ekstrom Bothman
                        </Text>
                        <Text style={style.bio}>
                            Experience Design Intermediate
                        </Text>
                        <Text style={style.achievements}>
                            123 rides, 2 badges
                        </Text>
                    </View>
                </View>
                <View style={item(10)}>
                    <View>
                        <Text style={style.more}>
                            ...
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[style.row, style.commentsBox]}>
                <Text style={style.commentsText}>
                    Hey! Do you mind if I throw my suitcase in the trunk?
                </Text>
                <View style={style.commentsBoxAfter}/>
            </View>
            <View style={[style.row, style.options]}>
                <Text style={style.optionsHeader}>
                    I’m Traveling with a baggage.
                </Text>
                <Text style={style.optionsValue}>
                    The baggage is allowed in your car
                </Text>
                <View style={style.optionsLine}/>
            </View>
            <View style={[style.stops]}>
                <Text style={style.optionsHeader}>
                    Jaylon’s stop in your Journey
                </Text>
                <View style={[style.stop, style.row, style.stopsRows]}>
                    <View style={[item(5), style.tripColumn]}>
                        <Circle color='#FFFFFF'
                                radius='1.3rem'
                                base={true}
                                marginTop={'0.3rem'}>
                            <Circle color='#C1C1C5'
                                    radius='1rem'/>
                        </Circle>
                        <View style={[style.stopLine]}/>
                    </View>
                    <View style={[item(95), style.tripPoint]}>
                        <Text style={style.stopName}>
                            Location A
                        </Text>
                    </View>
                </View>

                <View style={[style.stop, style.row]}>
                    <View style={[item(5), style.tripColumn]}>
                        <Circle color='#FFFFFF'
                                radius='0.75rem'
                                base={true}
                                marginTop={'0.5rem'}>
                            <Circle color='#C1C1C5'
                                    radius='0.35rem'/>
                        </Circle>
                        <View style={style.stopLine}/>
                    </View>
                    <View style={[item(95), style.tripPoint]}>
                        <Text style={style.stopName}>
                            Stop A.1
                        </Text>
                    </View>
                </View>
                <View style={[style.stop, style.row]}>
                    <View style={[item(5), style.tripColumn]}>
                        <Circle color='#FFFFFF'
                                radius='1.1rem'
                                base={true}
                                marginTop={'0.3rem'}>
                            <LinearGradient style={style.circleGrad}
                                            colors={['#00A3CF', '#5552A0']}
                                            start={{x: 0, y: 0}}
                                            end={{x: 1, y: 1}}/>
                        </Circle>
                        <View style={style.stopLine}/>
                    </View>
                    <View style={[item(95), style.tripPoint]}>
                        <LinearTextGradient
                            style={[style.stopName]}
                            locations={[0, 1]}
                            colors={['#00A3CF', '#5552A0']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                        >
                            <Text style={[style.activeStopName]}>
                                Jaylon's stop A.2 ‏
                            </Text>
                            <Text style={{fontFamily: OpenSans.Regular}}>
                                (view on the map)
                            </Text>
                        </LinearTextGradient>
                    </View>
                </View>
                <View style={[style.stop, style.row]}>
                    <View style={[item(5), style.tripColumn]}>
                        <Circle color='#FFFFFF' radius='1.3rem' base={true} marginTop={'0.3rem'}>
                            <Circle color='#C1C1C5' radius='1rem'/>
                        </Circle>
                    </View>
                    <View style={[item(95), style.tripPoint]}>
                        <Text style={style.stopName}>
                            Location B (Your stop)
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
