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
          Array [
            Object {
              "alignItems": "center",
              "flex": 6,
              "justifyContent": "space-evenly",
            },
          ]
        }
      >
        <Image
          source={
            Object {
              "testUri": "../../../assets/images/journey/bermuda-delivery-car-service.png",
            }
          }
          style={
            Object {
              "height": 275,
              "transform": Array [
                Object {
                  "scaleX": -1,
                },
              ],
              "width": 275,
            }
          }
        />
        <View
          style={
            Array [
              Object {
                "alignItems": "center",
              },
            ]
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Milliard Bold",
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
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Milliard Bold",
                  "fontSize": 20,
                  "letterSpacing": 0.2,
                  "textTransform": "uppercase",
                  "top": 10,
                },
                Object {
                  "color": "#0B171B",
                },
              ]
            }
          >
            Car Application
          </Text>
        </View>
      </View>
      <View
        style={
          Object {
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
                  "alignSelf": "center",
                  "fontSize": 16,
                  "height": 56,
                  "justifyContent": "center",
                  "width": "85%",
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
                  },
                  Object {
                    "color": "#FFFFFF",
                  },
                ]
              }
            >
              Log In
            </Text>
          </ForwardRef>
        </View>
      </View>
    </View>
  `));
