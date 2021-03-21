import React from "react";
import renderer from "react-test-renderer";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

test("renders correctly", async () =>
    expect(renderer.create(<CreateJourney />).toJSON()).toMatchInlineSnapshot(`
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
            "color": "black",
          }
        }
      >
        Create Journey
      </Text>
    </View>
  `));
