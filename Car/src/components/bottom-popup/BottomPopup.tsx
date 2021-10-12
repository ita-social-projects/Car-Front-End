import React from "react";
import { View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import BottomPopupStyle from "./BottomPopupStyle";
import BottomPopupProps from "./BottomPopupProps";
import { useTheme } from "../theme/ThemeProvider";

const BottomPopup = (props: BottomPopupProps) => {
    const { colors } = useTheme();

    return(
        <BottomSheet
            ref={props.refForChild as any}
            snapPoints={props.snapPoints as any}
            renderContent={() => props.renderContent}
            renderHeader={() => (
                <>
                    <View style={[BottomPopupStyle.header,
                        {
                            backgroundColor: colors.white,
                            shadowColor: colors.primary
                        }]}>
                        <View style={BottomPopupStyle.panelHeader}>
                            <View style={[BottomPopupStyle.panelHandle, { backgroundColor: colors.primary }]} />
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
};

export default BottomPopup;
