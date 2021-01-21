import * as React from 'react';
import {View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomPopupStyle from '../styles/BottomPopupStyle';

function BottomPopup(props: any) {
  const renderHeader = () => (
    <View style={BottomPopupStyle.headerContainer}>
      <View style={BottomPopupStyle.headerBlackline} />
    </View>
  );

  const sheetRef = React.useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={props.snapPoints}
      renderContent={props.renderContent}
      renderHeader={renderHeader}
      initialSnap={props.initialSnap}
    />
  );
}

export default BottomPopup;