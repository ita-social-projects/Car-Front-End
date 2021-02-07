import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import { OpenSans } from "../../../font-manager";
import JourneyNewApplicantStyle, { Circle, item } from './JourneyNewApplicantStyle';

export const JourneyNewApplicant = () => {
    let [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                style={[JourneyNewApplicantStyle.button, JourneyNewApplicantStyle.acceptButton]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Text style={JourneyNewApplicantStyle.acceptButtonText}>
                    Show
                </Text>
            </TouchableOpacity>
            <Modal visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <View style={JourneyNewApplicantStyle.body}>
                    <View style={JourneyNewApplicantStyle.container}>
                        <View style={JourneyNewApplicantStyle.row}>
                            <View style={item(50)}>
                                <Text style={JourneyNewApplicantStyle.header}>
                                    New Applicant
                                </Text>
                            </View>
                            <View style={item(50)}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={JourneyNewApplicantStyle.snooze}>
                                        Snooze
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[JourneyNewApplicantStyle.row, JourneyNewApplicantStyle.title]}>

                            <View style={item(20)}>
                                <View style={JourneyNewApplicantStyle.circle}>
                                    <Text style={JourneyNewApplicantStyle.icon}>
                                        JB
                                    </Text>
                                </View>
                            </View>
                            <View style={item(70)}>
                                <View style={JourneyNewApplicantStyle.profile}>
                                    <Text style={JourneyNewApplicantStyle.name}>
                                        Jaylon Ekstrom Bothman
                                    </Text>
                                    <Text style={JourneyNewApplicantStyle.bio}>
                                        Experience Design Intermediate
                                    </Text>
                                    <Text style={JourneyNewApplicantStyle.achievements}>
                                        123 rides, 2 badges
                                    </Text>
                                </View>
                            </View>
                            <View style={item(10)}>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={JourneyNewApplicantStyle.more}>
                                            ...
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[JourneyNewApplicantStyle.row, JourneyNewApplicantStyle.commentsBox]}>
                            <Text style={JourneyNewApplicantStyle.commentsText}>
                                Hey! Do you mind if I throw my suitcase in the trunk?
                            </Text>
                            <View style={JourneyNewApplicantStyle.commentsBoxAfter} />
                        </View>
                        <View style={[JourneyNewApplicantStyle.row, JourneyNewApplicantStyle.options]}>
                            <Text style={JourneyNewApplicantStyle.optionsHeader}>
                                I’m Traveling with a baggage.
                            </Text>
                            <Text style={JourneyNewApplicantStyle.optionsValue}>
                                The baggage is allowed in your car
                            </Text>
                            <View style={JourneyNewApplicantStyle.optionsLine} />
                        </View>
                        <View style={[JourneyNewApplicantStyle.stops]}>
                            <Text style={JourneyNewApplicantStyle.optionsHeader}>
                                Jaylon’s stop in your Journey
                            </Text>
                            <View style={[JourneyNewApplicantStyle.stop, JourneyNewApplicantStyle.row, JourneyNewApplicantStyle.stopsRows]}>
                                <View style={[item(5), JourneyNewApplicantStyle.tripColumn]}>
                                    <Circle color='#FFFFFF'
                                        radius='1.3rem'
                                        base={true}
                                        marginTop={'0.3rem'}>
                                        <Circle color='#C1C1C5'
                                            radius='1rem' />
                                    </Circle>
                                    <View style={[JourneyNewApplicantStyle.stopLine]} />
                                </View>
                                <View style={[item(95), JourneyNewApplicantStyle.tripPoint]}>
                                    <Text style={JourneyNewApplicantStyle.stopName}>
                                        Location A
                                    </Text>
                                </View>
                            </View>

                            <View style={[JourneyNewApplicantStyle.stop, JourneyNewApplicantStyle.row]}>
                                <View style={[item(5), JourneyNewApplicantStyle.tripColumn]}>
                                    <Circle color='#FFFFFF'
                                        radius='0.75rem'
                                        base={true}
                                        marginTop={'0.5rem'}>
                                        <Circle color='#C1C1C5'
                                            radius='0.35rem' />
                                    </Circle>
                                    <View style={JourneyNewApplicantStyle.stopLine} />
                                </View>
                                <View style={[item(95), JourneyNewApplicantStyle.tripPoint]}>
                                    <Text style={JourneyNewApplicantStyle.stopName}>
                                        Stop A.1
                                    </Text>
                                </View>
                            </View>
                            <View style={[JourneyNewApplicantStyle.stop, JourneyNewApplicantStyle.row]}>
                                <View style={[item(5), JourneyNewApplicantStyle.tripColumn]}>
                                    <Circle color='#FFFFFF'
                                        radius='1.1rem'
                                        base={true}
                                        marginTop={'0.3rem'}>
                                        <LinearGradient style={JourneyNewApplicantStyle.circleGrad}
                                            colors={['#00A3CF', '#5552A0']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }} />
                                    </Circle>
                                    <View style={JourneyNewApplicantStyle.stopLine} />
                                </View>
                                <View style={[item(95), JourneyNewApplicantStyle.tripPoint]}>
                                    <LinearTextGradient
                                        style={[JourneyNewApplicantStyle.stopName]}
                                        locations={[0, 1]}
                                        colors={['#00A3CF', '#5552A0']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <Text style={[JourneyNewApplicantStyle.activeStopName]}>
                                            Jaylon's stop A.2 ‏
                                        </Text>
                                        <Text style={{ fontFamily: OpenSans.Regular }}>
                                            (view on the map)
                                        </Text>
                                    </LinearTextGradient>
                                </View>
                            </View>
                            <View style={[JourneyNewApplicantStyle.stop, JourneyNewApplicantStyle.row]}>
                                <View style={[item(5), JourneyNewApplicantStyle.tripColumn]}>
                                    <Circle color='#FFFFFF' radius='1.3rem' base={true} marginTop={'0.3rem'}>
                                        <Circle color='#C1C1C5' radius='1rem' />
                                    </Circle>
                                </View>
                                <View style={[item(95), JourneyNewApplicantStyle.tripPoint]}>
                                    <Text style={JourneyNewApplicantStyle.stopName}>
                                        Location B (Your stop)
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={JourneyNewApplicantStyle.buttons}>
                            <TouchableOpacity style={[JourneyNewApplicantStyle.button, JourneyNewApplicantStyle.acceptButton]}>
                                <Text style={JourneyNewApplicantStyle.acceptButtonText}>
                                    Accept
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[JourneyNewApplicantStyle.button, JourneyNewApplicantStyle.declineButton]}>
                                <Text style={JourneyNewApplicantStyle.declineButtonText}>
                                    Decline
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
