import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Messages from "../../../src/activity/messages/Messages";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", () =>
    expect(renderer.render(<Messages />)).toMatchInlineSnapshot(`
    <ForwardRef(SafeAreaView)
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <View
        style={
          Array [
            Object {
              "flex": 1,
              "padding": 15,
            },
            Object {
              "backgroundColor": "white",
            },
          ]
        }
      >
        <View />
        <FlatList
          data={Array []}
          disableVirtualization={false}
          horizontal={false}
          initialNumToRender={10}
          keyExtractor={[Function]}
          maxToRenderPerBatch={10}
          numColumns={1}
          onEndReachedThreshold={2}
          removeClippedSubviews={false}
          renderItem={[Function]}
          scrollEventThrottle={50}
          updateCellsBatchingPeriod={50}
          windowSize={21}
        />
      </View>
    </ForwardRef(SafeAreaView)>
  `));
