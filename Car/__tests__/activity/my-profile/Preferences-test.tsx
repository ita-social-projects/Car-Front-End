import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Preferences from "../../../src/activity/my-profile/my-profile-activity/preferences/Preferences";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", () =>
    expect(renderer.render(<Preferences />)).toMatchInlineSnapshot(`
    <React.Fragment>
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
        <Indicator
          color="#414045"
          size="large"
          text="Loading information..."
        />
      </View>
    </React.Fragment>
  `));
