import React from "react";
import renderer from "react-test-renderer";
import ChatSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/chat-settings/ChatSettings";

test("renders correctly", async () =>
    expect(renderer.create(<ChatSettings />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignItems": "center",
            "flex": 1,
            "justifyContent": "center",
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <Text
        style={
          Object {
            "color": "#0B171B",
          }
        }
      >
        App Settings
      </Text>
    </View>
  `));
