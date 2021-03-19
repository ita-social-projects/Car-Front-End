import React from "react";
import renderer from "react-test-renderer";
import AppSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/app-settings/AppSettings";

test("renders correctly", () =>
    expect(renderer.create(<AppSettings />).toJSON()).toMatchInlineSnapshot(`
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
