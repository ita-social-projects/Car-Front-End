import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Login from "../../../src/activity/login/Login";

const renderer = shallowRender.createRenderer();

const navigation = {
  addListener: () => () => {},
};

test("renders correctly", async () =>
  expect(
    renderer.render(<Login navigation={navigation} route={undefined as any} />)
  ).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingBottom": 22,
            "paddingHorizontal": 16,
            "paddingTop": 74,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
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
            Array [
              Object {
                "fontFamily": "Proxima Nova Rg Bold",
                "fontSize": 14,
                "letterSpacing": 0.2,
                "lineHeight": 16,
                "textTransform": "uppercase",
              },
              Object {
                "color": "#0B171B",
              },
            ]
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
            Array [
              Object {
                "fontFamily": "Proxima Nova Rg Bold",
                "fontSize": 20,
                "letterSpacing": 0.2,
                "textTransform": "uppercase",
              },
              Object {
                "color": "#0B171B",
              },
            ]
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
          <TouchableOpacity
            activeOpacity={1}
            disabled={false}
            onPress={[Function]}
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "fontSize": 16,
                  "height": 48,
                  "justifyContent": "center",
                  "width": 81,
                },
                Object {
                  "backgroundColor": "#414045",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova Rg Bold",
                    "fontSize": 16,
                    "textTransform": "uppercase",
                  },
                  Object {
                    "color": "#FFFFFF",
                  },
                ]
              }
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  `));
