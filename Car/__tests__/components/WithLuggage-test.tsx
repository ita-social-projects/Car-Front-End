import React from "react";
import renderer from "react-test-renderer";
import WithLuggage from "../../src/components/journey-new-applicant/with-luggage/WithLuggage";

test("renders correctly", async () =>
    expect(renderer.create(<WithLuggage />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          undefined,
          undefined,
        ]
      }
    >
      <View />
      <View
        style={
          Array [
            undefined,
            Object {
              "backgroundColor": "#FFFFFF",
              "borderBottomColor": "#C1C1C5",
              "borderLeftColor": "rgba(0,0,0,0)",
              "borderRightColor": "rgba(0,0,0,0)",
              "borderTopColor": "rgba(0,0,0,0)",
            },
          ]
        }
      />
    </View>
  `));
