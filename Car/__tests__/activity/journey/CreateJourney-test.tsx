import React from "react";
import renderer from "react-test-renderer";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

test("renders correctly", () =>
    expect(renderer.create(<CreateJourney />).toJSON()).toMatchInlineSnapshot(`
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
        Create Journey
      </Text>
    </View>
  `));
