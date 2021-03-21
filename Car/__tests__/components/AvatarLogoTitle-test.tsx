import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AvatarLogoTitle from "../../src/components/avatar-logo-title/AvatarLogoTitle";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<AvatarLogoTitle />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingLeft": 17,
          "paddingTop": 20,
        }
      }
    >
      <View
        style={
          Object {
            "flex": 1,
            "flexDirection": "row",
          }
        }
      >
        <AvatarLogo
          size={56}
          user={null}
        />
        <View
          style={
            Object {
              "marginLeft": 71,
              "position": "absolute",
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "fontSize": 18,
                  "fontWeight": "bold",
                  "lineHeight": 21,
                  "marginBottom": 8,
                },
                Object {
                  "color": "black",
                },
              ]
            }
          >
            undefined undefined
          </Text>
          <Text
            style={
              Array [
                Object {
                  "fontSize": 14,
                  "lineHeight": 14,
                  "marginBottom": 8,
                  "opacity": 0.5,
                },
                Object {
                  "color": "black",
                },
              ]
            }
          />
          <Text
            style={
              Array [
                Object {
                  "fontSize": 14,
                  "lineHeight": 14,
                  "marginBottom": 8,
                  "opacity": 0.5,
                },
                Object {
                  "color": "black",
                },
              ]
            }
          >
            undefined rides
            , 2 badges
          </Text>
        </View>
      </View>
    </View>
  `));
