import * as React from 'react';
import { View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomPopupStyle from '../styles/BottomPopupStyle';

function BottomPopup(props: any) {

  const renderHeader = () => (
    <>
      <View style={BottomPopupStyle.header}>
        <View style={BottomPopupStyle.panelHeader}>
          <View style={BottomPopupStyle.panelHandle} />
        </View>
      </View>
      {props?.renderHeader()}
    </>
  );

  return (
    <BottomSheet
      ref={props.refForChild}
      snapPoints={props.snapPoints}
      renderContent={props.renderContent}
      renderHeader={renderHeader}
      initialSnap={props.initialSnap}
      enabledInnerScrolling={props.enabledInnerScrolling}
      onCloseEnd={props.onCloseEnd}
    />
  );
}

export default BottomPopup;