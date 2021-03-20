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
              Object {
                "color": "black",
                "fontSize": 18,
                "fontWeight": "bold",
                "lineHeight": 21,
                "marginBottom": 8,
              }
            }
          >
            undefined undefined
          </Text>
          <Text
            style={
              Object {
                "color": "black",
                "fontSize": 14,
                "lineHeight": 14,
                "marginBottom": 8,
                "opacity": 0.5,
              }
            }
          />
          <Text
            style={
              Object {
                "color": "black",
                "fontSize": 14,
                "lineHeight": 14,
                "marginBottom": 8,
                "opacity": 0.5,
              }
            }
          >
            undefined rides
            , 2 badges
          </Text>
        </View>
      </View>
    </View>
  `));
