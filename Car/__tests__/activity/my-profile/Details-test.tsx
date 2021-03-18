import React from "react";
import renderer from "react-test-renderer";
import Details from "../../../src/activity/my-profile/my-profile-activity/details/Details";

test("renders correctly", () =>
  expect(renderer.create(<Details />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#FFFFFF",
          "flex": 1,
          "paddingHorizontal": 24,
          "paddingTop": 32,
        }
      }
    >
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
          color="#414045"
          hidesWhenStopped={true}
          size="large"
        />
        <Text
          style={
            Object {
              "color": "#414045",
              "fontFamily": "Proxima Nova",
              "fontSize": 14,
              "fontWeight": "700",
            }
          }
        >
          Loading information...
        </Text>
      </View>
    </View>
  `));
