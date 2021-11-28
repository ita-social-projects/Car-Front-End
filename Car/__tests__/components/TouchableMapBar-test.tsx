import React from "react";
import shallowRender from "react-test-renderer/shallow";
import TouchableMapBar from "../../src/components/touchable-map-bar/TouchableMapBar";
import { lightColors } from "../../src/components/theme/ThemesColors";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <TouchableMapBar
                iconName={"location"}
                iconColor={lightColors.secondaryLight}
            />
        )
    ).toMatchInlineSnapshot(`
    <View>
      <TouchableOpacity
        style={
          Array [
            Object {
              "borderWidth": 1,
              "flexDirection": "row",
              "fontFamily": "Open Sans Regular",
              "padding": 10,
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
            color="#AAA9AE"
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
