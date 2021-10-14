import React from "react";
import renderer from "react-test-renderer";
import NotificationSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/notification-settings/NotificationSettings";

test("renders correctly", async () =>
    expect(renderer.create(<NotificationSettings />).toJSON())
        .toMatchInlineSnapshot(`
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
