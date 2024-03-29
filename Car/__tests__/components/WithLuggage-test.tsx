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
      <Text>
        I'm traveling without luggage.
      </Text>
      <View
        style={
          Array [
            undefined,
            Object {
              "backgroundColor": "#FFFFFF",
              "borderBottomColor": "#AAA9AE",
              "borderLeftColor": "rgba(0,0,0,0)",
              "borderRightColor": "rgba(0,0,0,0)",
              "borderTopColor": "rgba(0,0,0,0)",
            },
          ]
        }
      />
    </View>
  `));
