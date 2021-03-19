import React from "react";
import shallowRender from "react-test-renderer/shallow";
import TouchableMapBar from "../../src/components/touchable-map-bar/TouchableMapBar";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<TouchableMapBar />)).toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        style={
          Array [
            Object {
              "backgroundColor": "white",
              "borderWidth": 2.3,
              "flexDirection": "row",
              "fontFamily": "Open Sans",
              "marginLeft": 20,
              "marginRight": 20,
              "padding": 8,
            },
            Object {
              "marginBottom": NaN,
              "marginTop": NaN,
            },
          ]
        }
      >
        <Text
          style={
            Object {
              "color": "#909095",
              "fontFamily": "Open Sans",
              "fontSize": 17,
              "marginLeft": 5,
            }
          }
        >
          undefined:
           
        </Text>
        <Text
          style={
            Array [
              Object {
                "color": "black",
                "fontSize": 18,
              },
              Object {
                "flex": NaN,
              },
            ]
          }
        >
           
        </Text>
        <View>
          <Icon
            allowFontScaling={false}
            color="#414045"
            size={22}
            style={
              Array [
                Object {
                  "borderColor": "#EEEEEE",
                  "marginRight": 5,
                },
                Object {
                  "transform": Array [
                    Object {
                      "rotate": "0deg",
                    },
                  ],
                },
              ]
            }
          />
        </View>
      </ForwardRef>
    </View>
  `));
