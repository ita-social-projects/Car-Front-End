import React from "react";
import renderer from "react-test-renderer";
import Indicator from "../../src/components/activity-indicator/Indicator";

test("renders correctly", async () =>
  expect(renderer.create(<Indicator />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignItems": "center",
            "flex": 1,
            "flexDirection": "column",
            "justifyContent": "center",
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <ActivityIndicator />
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Proxima Nova Extrabold",
              "fontSize": 14,
              "fontWeight": "700",
            },
            Object {
              "color": "#414045",
            },
          ]
        }
      >
        
      </Text>
    </View>
  `));
