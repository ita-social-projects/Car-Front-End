import React from "react";
import shallowRender from "react-test-renderer/shallow";
import TouchableMapBar from "../../src/components/touchable-map-bar/TouchableMapBar";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<TouchableMapBar iconName={"location"} />))
        .toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        style={
          Array [
            Object {
              "borderWidth": 2.3,
              "flexDirection": "row",
              "fontFamily": "Open Sans",
              "padding": 8,
            },
            Object {
              "backgroundColor": "white",
              "borderColor": "black",
              "marginBottom": NaN,
              "marginHorizontal": 20,
              "marginTop": NaN,
            },
          ]
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": "Open Sans",
                "fontSize": 17,
                "marginLeft": 5,
              },
              Object {
                "color": "#909095",
              },
            ]
          }
        >
          undefined:
           
        </Text>
        <Text
          style={
            Array [
              Object {
                "fontSize": 18,
              },
              Object {
                "color": "black",
                "flex": NaN,
              },
            ]
          }
        >
           
        </Text>
        <ForwardRef>
          <Icon
            allowFontScaling={false}
            color="#414045"
            name="location"
            size={22}
            style={
              Array [
                Object {
                  "marginRight": 5,
                },
                Object {
                  "borderColor": "#EEEEEE",
                  "transform": Array [
                    Object {
                      "rotate": "0deg",
                    },
                  ],
                },
              ]
            }
          />
        </ForwardRef>
      </ForwardRef>
    </View>
  `));
