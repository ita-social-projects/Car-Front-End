import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AvatarLogoTitle from "../../src/components/avatar-logo-title/AvatarLogoTitle";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<AvatarLogoTitle />)).toMatchInlineSnapshot(`
    <Shadow
      distance={8}
      offset={
        Array [
          0,
          3,
        ]
      }
      startColor="#e5e5e5"
    >
      <View
        style={
          Array [
            Object {
              "borderRadius": 16,
              "borderWidth": 1,
              "minHeight": 48,
              "paddingHorizontal": 26,
              "paddingVertical": 24,
              "width": 718,
            },
            Object {
              "backgroundColor": "#FFFFFF",
              "borderColor": "#F8F8F8",
            },
          ]
        }
      >
        <ScrollView>
          <View
            style={
              Object {
                "alignItems": "center",
                "flex": 1,
                "flexDirection": "row",
                "minHeight": 98,
              }
            }
          >
            <AvatarLogo
              marginTop={0}
              size={56}
              user={null}
            />
            <View
              style={
                Object {
                  "marginLeft": 20,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 18,
                      "fontWeight": "bold",
                      "lineHeight": 22,
                      "marginBottom": 4,
                    },
                    Object {
                      "color": "#0B171B",
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
                      "color": "rgba(0, 163, 207, 1)",
                      "fontSize": 14,
                      "lineHeight": 18,
                      "marginBottom": 4,
                    },
                    Object {
                      "color": "#414045",
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
                      "lineHeight": 18,
                      "marginBottom": 4,
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
                      "fontSize": 13,
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                undefined rides as driver
              </Text>
              <Text
                style={
                  Array [
                    Object {
                      "fontSize": 13,
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                undefined rides as passanger
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Shadow>
  `));
