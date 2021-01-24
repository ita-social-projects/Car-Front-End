import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import carDropDownStyle from './CarDropDownPickerStyle';

function CarDropDownPicker(props: any) {
    return (
        <View style={props.required && { justifyContent: 'center' }}>
            {props.required && <Text
                style={[
                    carDropDownStyle.requiredPointer,
                    { zIndex: props.zIndex + 10 }
                ]}>*</Text>}
            <DropDownPicker
                zIndex={props.zIndex}
                customArrowDown={() => <Ionicons name="caret-down-outline" size={14} />}
                customArrowUp={() => <Ionicons name="caret-up-outline" size={14} />}
                items={props.items ?? []}
                searchable={true}
                searchablePlaceholder="Manual input"
                searchablePlaceholderTextColor="gray"
                searchableError={() => <Text>Not Found</Text>}
                placeholder={props.placeHolder}
                defaultValue={''}
                style={
                    [
                        carDropDownStyle.container,
                        props.disabled && carDropDownStyle.disabledStyle,
                    ]}
                dropDownStyle={carDropDownStyle.dropDownStyle}
                containerStyle={[{ height: 48 }, props.style]}
                placeholderStyle={[
                    carDropDownStyle.placeholderStyle,
                    props.required && { paddingLeft: 12 },
                    carDropDownStyle.initialPlaceHolder
                ]}
                selectedLabelStyle={
                    [carDropDownStyle.placeholderStyle,
                    props.required && { paddingLeft: 12 }
                    ]}
                itemStyle={carDropDownStyle.itemStyle}
                onChangeItem={props.selectHandle ?
                    (item) => {
                        props.selectHandle(item);
                    } : () => { }}
                disabled={props.disabled}
            />
        </View>
    )
}
export default CarDropDownPicker;