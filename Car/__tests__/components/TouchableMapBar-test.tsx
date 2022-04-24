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
      <ForwardRef
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
        true
      </ForwardRef>
    </View>
  `));
