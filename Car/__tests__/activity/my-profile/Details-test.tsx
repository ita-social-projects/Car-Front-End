import React from "react";
import renderer from "react-test-renderer";
import Details from "../../../src/activity/my-profile/my-profile-activity/details/Details";

test("renders correctly", async () =>
    expect(renderer.create(<Details />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingHorizontal": 24,
            "paddingTop": 32,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
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
        <ActivityIndicator
          color="#414045"
          size="large"
        />
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
          Loading information...
        </Text>
      </View>
    </View>
  `));
