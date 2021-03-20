import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyCard from "../../src/components/journey-card/JourneyCard";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<JourneyCard />)).toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        onPress={[Function]}
      >
        <View
          style={
            Object {
              "borderColor": "black",
              "borderRadius": 8,
              "borderStyle": "solid",
              "borderWidth": 1,
              "height": 128,
              "marginBottom": 16,
            }
          }
        >
          <View
            style={
              Object {
                "flexDirection": "row",
              }
            }
          >
            <View
              style={
                Object {
                  "paddingBottom": 16.75,
                  "paddingLeft": 18.75,
                  "paddingRight": 10.75,
                  "paddingTop": 14.75,
                }
              }
            >
              <AvatarLogo
                size={38.5}
              />
            </View>
            <View
              style={
                Object {
                  "flex": 1,
                }
              }
            >
              <View
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "space-between",
                    "paddingRight": 10,
                    "paddingTop": 16,
                  }
                }
              >
                <View>
                  <Text
                    style={
                      Object {
                        "alignItems": "center",
                        "color": "black",
                        "fontFamily": undefined,
                        "fontSize": 16,
                        "fontWeight": "700",
                        "lineHeight": 16,
                      }
                    }
                  >
                    undefined undefined
                    's journey
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "alignItems": "flex-end",
                      "flex": 1,
                      "height": 16,
                      "top": -10,
                    }
                  }
                >
                  <ForwardRef
                    onPress={[Function]}
                  >
                    <Icon
                      allowFontScaling={false}
                      color="black"
                      name="ellipsis-horizontal"
                      size={20}
                    />
                  </ForwardRef>
                </View>
              </View>
              <View
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "space-between",
                    "paddingRight": 12,
                    "paddingTop": 4,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "alignItems": "center",
                      "color": "#909095",
                      "fontFamily": "Open Sans",
                      "fontSize": 11,
                      "lineHeight": 16,
                    }
                  }
                />
                <Text
                  style={
                    Object {
                      "color": "#02A2CF",
                      "fontFamily": undefined,
                      "fontSize": 11,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    }
                  }
                >
                  Invalid date
                </Text>
              </View>
            </View>
          </View>
          <View
            style={
              Object {
                "paddingLeft": 16,
              }
            }
          >
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View
                style={
                  Object {
                    "backgroundColor": "#AAA9AE",
                    "borderColor": "#FFFFFF",
                    "borderRadius": 400,
                    "borderWidth": 2,
                    "width": 16,
                  }
                }
              />
              <Text
                style={
                  Object {
                    "color": "#414045",
                    "fontFamily": "Open Sans",
                    "fontSize": 11,
                    "lineHeight": 16,
                    "paddingLeft": 6,
                  }
                }
              >
                Location A
              </Text>
            </View>
            <View
              style={
                Object {
                  "backgroundColor": "#AAA9AE",
                  "height": 12,
                  "left": 7,
                  "width": 2,
                }
              }
            />
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View
                style={
                  Object {
                    "backgroundColor": "#AAA9AE",
                    "borderColor": "#FFFFFF",
                    "borderRadius": 400,
                    "borderWidth": 2,
                    "width": 16,
                  }
                }
              />
              <Text
                style={
                  Object {
                    "color": "#414045",
                    "fontFamily": "Open Sans",
                    "fontSize": 11,
                    "lineHeight": 16,
                    "paddingLeft": 6,
                  }
                }
              >
                Location B
              </Text>
            </View>
          </View>
        </View>
      </ForwardRef>
    </View>
  `));
