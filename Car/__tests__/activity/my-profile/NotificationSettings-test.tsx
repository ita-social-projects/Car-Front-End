import React from "react";
import renderer from "react-test-renderer";
import NotificationSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/notification-settings/NotificationSettings";

test("renders correctly", () =>
    expect(renderer.create(<NotificationSettings />).toJSON())
        .toMatchInlineSnapshot(`
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
