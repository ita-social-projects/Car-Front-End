import React from 'react'
import {View, Text, Button, Image, Platform} from 'react-native'
import {style} from './JourneyNewApplicantStyle'


export const JourneyNewApplicant = () => {
    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.item50}>
                    <Text style={style.header}>New Applicant</Text>
                </View>
                <View style={style.item50}>
                    <Text style={style.snooze}>Snooze</Text>
                </View>
            </View>

        </View>
    )
}
