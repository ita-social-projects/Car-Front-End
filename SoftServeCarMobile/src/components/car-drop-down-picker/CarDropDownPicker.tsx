import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CarDropDownPickerStyle from './CarDropDownPickerStyle';

function CarDropDownPicker(props: any) {
    return (
        <View style={props.required && { justifyContent: 'center' }}>
            {props.required && <Text
                style={[
                    CarDropDownPickerStyle.requiredPointer,
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
                        CarDropDownPickerStyle.container,
                        props.disabled && CarDropDownPickerStyle.disabledStyle,
                    ]}
                dropDownStyle={CarDropDownPickerStyle.dropDownStyle}
                containerStyle={[{ height: 48 }, props.style]}
                placeholderStyle={[
                    CarDropDownPickerStyle.placeholderStyle,
                    props.required && { paddingLeft: 12 },
                    CarDropDownPickerStyle.initialPlaceHolder
                ]}
                selectedLabelStyle={
                    [CarDropDownPickerStyle.placeholderStyle,
                    props.required && { paddingLeft: 12 }
                    ]}
                itemStyle={CarDropDownPickerStyle.itemStyle}
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