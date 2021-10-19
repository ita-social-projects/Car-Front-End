import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "../../src/components/menu-button/MenuButton";

test("renders correctly", async () =>
    expect(renderer.create(<MenuButton />).toJSON()).toMatchInlineSnapshot(`
    <RNGestureHandlerButton
      collapsable={false}
      onGestureEvent={[Function]}
      onGestureHandlerEvent={[Function]}
      onGestureHandlerStateChange={[Function]}
      onHandlerStateChange={[Function]}
      rippleColor={0}
    >
      <View
        accessible={true}
        style={
          Object {
            "backgroundColor": "#FFFFFF",
            "flexDirection": "column",
            "height": 44,
            "justifyContent": "center",
            "paddingHorizontal": 12,
          }
        }
      >
        <View>
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "space-between",
              }
            }
          >
            <View
              style={
                Object {
                  "justifyContent": "center",
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "fontSize": 13,
                      "fontWeight": "bold",
                      "lineHeight": 42,
                      "paddingLeft": 24,
                    },
                    Object {
                      "color": "#0B171B",
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              />
            </View>
            <View />
          </View>
          <View
            style={
              Array [
                Object {
                  "flexWrap": "wrap",
                  "height": 1,
                  "width": "100%",
                },
                Object {
                  "backgroundColor": "#AAA9AE",
                },
              ]
            }
          />
        </View>
      </View>
    </RNGestureHandlerButton>
  `));
