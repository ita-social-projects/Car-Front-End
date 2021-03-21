import React from "react";
import renderer from "react-test-renderer";
import Indicator from "../../src/components/activity-indicator/Indicator";

test("renders correctly", async () =>
    expect(renderer.create(<Indicator />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
          "flex": 1,
          "flexDirection": "column",
          "justifyContent": "center",
        }
      }
    >
      <ActivityIndicator
        animating={true}
        color="#999999"
        hidesWhenStopped={true}
        size="small"
      />
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Proxima Nova",
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
