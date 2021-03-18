import React from "react";
import renderer from "react-test-renderer";
import ChatSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/chat-settings/ChatSettings";

test("renders correctly", () =>
  expect(renderer.create(<ChatSettings />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
          "backgroundColor": "#FFFFFF",
          "flex": 1,
          "justifyContent": "center",
        }
      }
    >
      <Text>
        App Settings
      </Text>
    </View>
  `));
