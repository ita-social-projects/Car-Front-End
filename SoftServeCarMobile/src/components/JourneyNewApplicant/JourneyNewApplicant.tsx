import React from 'react'
import {View, Text, Button, Image, Platform} from 'react-native'
import {style, item} from './JourneyNewApplicantStyle'

export const JourneyNewApplicant = () => {
    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={item(50)}>
                    <Text style={style.header}>New Applicant</Text>
                </View>
                <View style={item(50)}>
                    <Text style={style.snooze}>Snooze</Text>
                </View>
            </View>
            <View style={[style.row, style.title]}>

                <View style={item(20)}>
                    <View style={style.circle}>
                        <Text style={style.icon}>JB</Text>
                    </View>
                </View>
                <View style={item(70)}>
                    <View style={style.profile}>
                        <Text style={style.name}>Jaylon Ekstrom Bothman</Text>
                        <Text style={style.bio}>Experience Design Intermediate</Text>
                        <Text style={style.achievements}>123 rides, 2 badges</Text>
                    </View>
                </View>
                <View style={item(10)}>
                    <View>
                        <Text style={style.more}>...</Text>
                    </View>
                </View>
            </View>
            <View style={[style.row, style.commentsBox]}>
                <Text style={style.commentsText}>Hey! Do you mind if I throw my suitcase in the trunk?</Text>
                <View style={style.commentsBoxAfter}/>
            </View>
            <View style={[style.row, style.options]}>
                <Text style={style.optionsHeader}>I’m Traveling with a baggage.</Text>
                <Text style={style.optionsValue}>The baggage is allowed in your car</Text>
                <View style={style.optionsLine}/>
            </View>
            <View style={[style.row, style.stops]}>
                <Text style={style.optionsHeader}>Jaylon’s stop in your Journey</Text>
            </View>


        </View>
    )
}
