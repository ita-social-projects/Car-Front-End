import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownItem from './DropDownItem';
import dropDownStyles from './DropDownPickerStyle';

const Item = ({ title }: { title: any }) => (
    <View style={dropDownStyles.item}>
        <Text>{title}</Text>
    </View>
);

function DropDownPicker(props: any) {
    const textInput = useRef<any>(null);
    const [show, setShow] = useState(false);
    const [palceHolder, setPlaceHolder] = useState(props.placeHolder);
    const [searchTitle, setSearchTitle] = useState(String);
    const [items, setItems] = useState({} as DropDownItem[]);

    useEffect(() => { setItems(props.items);[props.items] });

    const RenderItem = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => { setPlaceHolder(item.title); props.onSelectedItem(item) }}>
            <Item title={item.title} />
        </TouchableOpacity>
    );

    const data = searchTitle === "" ? items :
        [...items.filter(item => item.title.toLowerCase().includes(searchTitle))];

    return (
        <View style={[dropDownStyles.container, props.style, { zIndex: props.zIndex }]}>
            <TouchableOpacity onPress={() => { setShow(!show); }} >
                <View style={dropDownStyles.placeHolderContainer}>
                    <Text style={dropDownStyles.requiredPlaceHoler}>*
                        <Text style={[dropDownStyles.placeHolder]}> {palceHolder}</Text>
                    </Text>
                    <Ionicons name={show ? "caret-up-outline" : "caret-down-outline"} size={14} />
                </View>
            </TouchableOpacity>
            {show ? <View style={{ zIndex: props.zIndex, flex: 1 }}>
                <View style={dropDownStyles.dropDownArea}>
                    <TouchableWithoutFeedback
                        touchSoundDisabled={true}
                        style={{ zIndex: props.zIndex }}
                        onPress={() => { textInput.current?.focus(); }}>
                        <TextInput
                            ref={textInput}
                            placeholder="Manual input"
                            onChangeText={(text) =>
                                setSearchTitle(text.toLowerCase())}
                            style={[dropDownStyles.searchArea, { zIndex: props.zIndex }]} />
                    </TouchableWithoutFeedback>
                    <ScrollView style={[dropDownStyles.scrollView]}>
                        <View style={{ backgroundColor: '#DCDCDC' }}>
                            {data.map((item) => <RenderItem key={item.id} item={item} />)}
                        </View>
                    </ScrollView>
                </View>
            </View> : <></>}
        </View>
    );
}
export default DropDownPicker;