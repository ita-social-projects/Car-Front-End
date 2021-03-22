import React from "react";
import { View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import DM from "../styles/DM";
import BottomPopupStyle from "./BottomPopupStyle";

const BottomPopup = (props: any) => (
    <BottomSheet
        ref={props.refForChild}
        snapPoints={props.snapPoints}
        renderContent={() => props.renderContent}
        renderHeader={() => (
            <>
                <View style={[BottomPopupStyle.header,
                    {
                        backgroundColor: DM("white"),
                        shadowColor: DM("#000000")
                    }]}>
                    <View style={BottomPopupStyle.panelHeader}>
                        <View style={[BottomPopupStyle.panelHandle, { backgroundColor: DM("#000000") }]} />
                    </View>
                </View>
                {props?.renderHeader}
            </>
        )}
        initialSnap={props.initialSnap}
        enabledInnerScrolling={props.enabledInnerScrolling}
        onCloseEnd={props.onCloseEnd}
    />
);

export default BottomPopup;
