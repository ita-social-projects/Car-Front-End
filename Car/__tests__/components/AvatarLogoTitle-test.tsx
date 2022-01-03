import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AvatarLogoTitle from "../../src/components/avatar-logo-title/AvatarLogoTitle";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<AvatarLogoTitle />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingLeft": 17,
          "paddingTop": 0,
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
          marginLeft={8}
          marginTop={14}
          size={56}
          user={null}
        />
        <View
          style={
            Object {
              "marginLeft": 81,
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
                  "color": "#02A2CF",
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
                },
                Object {
                  "color": "#909095",
                  "fontWeight": "bold",
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
                },
                Object {
                  "color": "#909095",
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
                },
                Object {
                  "color": "#909095",
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
