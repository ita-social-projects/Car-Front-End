import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Cars from "../../../src/activity/my-profile/my-profile-activity/cars/Cars";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<Cars navigation={undefined as any} />))
        .toMatchInlineSnapshot(`
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
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
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
