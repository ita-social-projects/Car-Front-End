import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Login from "../../../src/activity/login/Login";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<Login />)).toMatchInlineSnapshot(`
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
              "color": "black",
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
              "color": "black",
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
          <ForwardRef
            activeOpacity={1}
            disabled={false}
            onPress={[Function]}
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "backgroundColor": "#000000",
                  "fontSize": 16,
                  "height": 48,
                  "justifyContent": "center",
                  "width": 81,
                },
                false,
              ]
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
          </ForwardRef>
        </View>
      </View>
    </View>
  `));
