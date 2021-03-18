import React from "react";
import renderer from "react-test-renderer";
import Login from "../../src/activity/login/Login";

test("renders correctly", () =>
  expect(renderer.create(<Login />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#FFFFFF",
          "flex": 1,
          "paddingBottom": 22,
          "paddingHorizontal": 16,
          "paddingTop": 74,
        }
      }
    >
      <View
        style={
          Object {
            "alignItems": "center",
          }
        }
      >
        <Text
          style={
            Object {
              "fontFamily": "Proxima Nova",
              "fontSize": 14,
              "letterSpacing": 0.2,
              "lineHeight": 16,
              "textTransform": "uppercase",
            }
          }
        >
          Welcome to
        </Text>
      </View>
      <View
        style={
          Object {
            "alignItems": "center",
            "paddingTop": 18,
          }
        }
      >
        <Text
          style={
            Object {
              "fontFamily": "Proxima Nova",
              "fontSize": 20,
              "letterSpacing": 0.2,
              "textTransform": "uppercase",
            }
          }
        >
          Softserve Journeys
        </Text>
      </View>
      <View
        style={
          Object {
            "alignItems": "flex-end",
            "flex": 1,
            "justifyContent": "flex-end",
          }
        }
      >
        <View
          style={
            Object {
              "alignItems": "center",
              "paddingBottom": 22,
              "paddingHorizontal": 16,
            }
          }
        >
          <View
            accessible={true}
            focusable={true}
            onClick={[Function]}
            onResponderGrant={[Function]}
            onResponderMove={[Function]}
            onResponderRelease={[Function]}
            onResponderTerminate={[Function]}
            onResponderTerminationRequest={[Function]}
            onStartShouldSetResponder={[Function]}
            style={
              Object {
                "alignItems": "center",
                "backgroundColor": "#000000",
                "fontFamily": "Proxima Nova",
                "fontSize": 16,
                "height": 48,
                "justifyContent": "center",
                "opacity": 1,
                "width": 81,
              }
            }
          >
            <Text
              style={
                Object {
                  "color": "#FFFFFF",
                  "fontFamily": "Proxima Nova",
                  "fontSize": 16,
                  "textTransform": "uppercase",
                }
              }
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    </View>
  `));
