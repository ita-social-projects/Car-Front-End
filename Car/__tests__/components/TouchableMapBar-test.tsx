import React from "react";
import shallowRender from "react-test-renderer/shallow";
import TouchableMapBar from "../../src/components/touchable-map-bar/TouchableMapBar";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<TouchableMapBar iconName={"location"} />))
        .toMatchInlineSnapshot(`
    <View>
      <TouchableOpacity
        style={
          Array [
            Object {
              "borderWidth": 2.3,
              "flexDirection": "row",
              "fontFamily": "Open Sans Regular",
              "padding": 8,
            },
            Object {
              "backgroundColor": "#FFFFFF",
              "borderColor": "#0B171B",
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
                "fontFamily": "Open Sans Regular",
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
                "color": "#0B171B",
                "flex": NaN,
              },
            ]
          }
        >
           
        </Text>
        <TouchableOpacity
          disabled={true}
        >
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
                  "borderColor": "#F8F8F8",
                  "transform": Array [
                    Object {
                      "rotate": "0deg",
                    },
                  ],
                },
              ]
            }
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  `));
