import React from "react";
import renderer from "react-test-renderer";
import Notifications from "../../src/activity/notifications/Notifications";

test("renders correctly", async () =>
    expect(renderer.create(<Notifications />).toJSON()).toMatchInlineSnapshot(`
    <RCTScrollView
      collapsable={false}
      data={Array []}
      disableVirtualization={false}
      getItem={[Function]}
      getItemCount={[Function]}
      horizontal={false}
      initialNumToRender={10}
      keyExtractor={[Function]}
      maxToRenderPerBatch={10}
      onContentSizeChange={[Function]}
      onEndReachedThreshold={2}
      onGestureHandlerEvent={[Function]}
      onGestureHandlerStateChange={[Function]}
      onLayout={[Function]}
      onMomentumScrollEnd={[Function]}
      onScroll={[Function]}
      onScrollBeginDrag={[Function]}
      onScrollEndDrag={[Function]}
      removeClippedSubviews={false}
      renderItem={[Function]}
      renderScrollComponent={[Function]}
      scrollEventThrottle={50}
      stickyHeaderIndices={Array []}
      style={
        Array [
          Object {
            "alignSelf": "stretch",
            "flex": 100,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
      updateCellsBatchingPeriod={50}
      viewabilityConfigCallbackPairs={Array []}
      windowSize={21}
    >
      <View />
    </RCTScrollView>
  `));
