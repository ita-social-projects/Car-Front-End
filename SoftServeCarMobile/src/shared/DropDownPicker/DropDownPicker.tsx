import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownItem from './DropDownItem';
import dropDownStyles from './DropDownPickerStyle';

const Item = ({title}: {title: any}) => (
    <View style={dropDownStyles.item}>
        <Text>{title}</Text>
    </View>
);

function DropDownPicker(props: any) {
    const [show, setShow] = useState(false);
    const [palceHolder, setPlaceHolder] = useState(props.placeHolder);
    const [searchTitle, setSearchTitle] = useState(String);
    const [items, setItems] = useState({} as DropDownItem[]);

    useEffect(() => {setItems(props.items); [props.items]});

    const renderItem = ({item}: {item: any}) => (
        <TouchableOpacity onPress={() => { setPlaceHolder(item.title); props.onSelectedItem(item) }}>
            <Item title={item.title} />
        </TouchableOpacity>
    );

    const data = searchTitle === "" ? items :
        [...items.filter(item => item.title.toLowerCase().includes(searchTitle))];


    return (
        <View style={[props.style]}>
            <TouchableOpacity onPress={() => setShow(!show)} >
                <View style={dropDownStyles.placeHolderContainer}>
                    <Text style={dropDownStyles.requiredPlaceHoler}>*
                        <Text style={[dropDownStyles.placeHolder]}> {palceHolder}</Text>
                    </Text>
                    <Ionicons name={show ? "caret-up-outline" : "caret-down-outline"} size={14} />
                </View>
            </TouchableOpacity>
            {show ? <View>
                <View>
                    <TextInput placeholder="Manual input" onChangeText={(text) =>
                        setSearchTitle(text.toLowerCase())} style={dropDownStyles.searchArea} />
                </View>
                <SafeAreaView style={dropDownStyles.scrollView}>
                    <FlatList
                        scrollEnabled={true}
                        style={{ backgroundColor: '#DCDCDC' }}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View> : <></>}
        </View>
    );
}
export default DropDownPicker;