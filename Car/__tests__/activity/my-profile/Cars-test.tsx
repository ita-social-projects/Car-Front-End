import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Cars from "../../../src/activity/my-profile/my-profile-activity/cars/Cars";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
  expect(renderer.render(<Cars />)).toMatchInlineSnapshot(`
    <ScrollView
      contentContainerStyle={
        Object {
          "flex": 1,
        }
      }
      refreshControl={
        <RefreshControlMock
          onRefresh={[Function]}
          refreshing={false}
        />
      }
      style={
        Object {
          "backgroundColor": "white",
          "flex": 1,
        }
      }
    >
      <View
        style={
          Array [
            Object {
              "alignSelf": "stretch",
              "justifyContent": "center",
              "padding": 8,
            },
            Object {
              "flex": 1,
            },
          ]
        }
      >
        <Indicator
          color="#414045"
          size="large"
          text="Loading information..."
        />
      </View>
    </ScrollView>
  `));
