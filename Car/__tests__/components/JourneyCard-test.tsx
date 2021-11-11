import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyCard from "../../src/components/journey-card/JourneyCard";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
  expect(renderer.render(<JourneyCard />)).toMatchInlineSnapshot(`
    <View>
      <TouchableOpacity
        onPress={[Function]}
      >
        <View
          style={
            Array [
              Object {
                "borderRadius": 8,
                "borderStyle": "solid",
                "borderWidth": 1,
                "height": 128,
                "marginBottom": 16,
              },
              Object {
                "borderColor": "#0B171B",
                "height": 138,
              },
            ]
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
                Array [
                  Object {
                    "paddingLeft": 18.75,
                    "paddingRight": 10.75,
                    "paddingTop": 14.75,
                  },
                  undefined,
                ]
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
                      Array [
                        Object {
                          "alignItems": "center",
                          "fontFamily": undefined,
                          "fontSize": 16,
                          "fontWeight": "700",
                          "lineHeight": 16,
                        },
                        Object {
                          "color": "#0B171B",
                        },
                      ]
                    }
                  >
                    undefined undefined
                    's ride
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
                  <TouchableOpacity
                    onPress={[Function]}
                  />
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
                    Array [
                      Object {
                        "alignItems": "center",
                        "fontFamily": "Open Sans Regular",
                        "fontSize": 11,
                        "lineHeight": 16,
                      },
                      Object {
                        "color": "#909095",
                      },
                    ]
                  }
                />
              </View>
            </View>
          </View>
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "paddingLeft": 70,
                "paddingRight": 16,
              }
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": undefined,
                    "fontSize": 11,
                    "fontWeight": "700",
                    "lineHeight": 16,
                  },
                  Object {
                    "color": "#02A2CF",
                  },
                ]
              }
            >
              Invalid date
            </Text>
          </View>
          <View
            style={
              Object {
                "paddingLeft": 16,
                "paddingTop": 8,
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
                  Array [
                    Object {
                      "borderRadius": 400,
                      "borderWidth": 2,
                      "width": 16,
                    },
                    Object {
                      "backgroundColor": "#AAA9AE",
                      "borderColor": "#FFFFFF",
                    },
                  ]
                }
              />
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans Regular",
                      "fontSize": 11,
                      "lineHeight": 16,
                      "paddingLeft": 6,
                    },
                    Object {
                      "color": "#414045",
                    },
                  ]
                }
              >
                Location A
              </Text>
            </View>
            <View
              style={
                Array [
                  Object {
                    "height": 12,
                    "left": 7,
                    "width": 2,
                  },
                  Object {
                    "backgroundColor": "#AAA9AE",
                  },
                ]
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
                  Array [
                    Object {
                      "borderRadius": 400,
                      "borderWidth": 2,
                      "width": 16,
                    },
                    Object {
                      "backgroundColor": "#AAA9AE",
                      "borderColor": "#FFFFFF",
                    },
                  ]
                }
              />
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans Regular",
                      "fontSize": 11,
                      "lineHeight": 16,
                      "paddingLeft": 6,
                    },
                    Object {
                      "color": "#414045",
                    },
                  ]
                }
              >
                Location B
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  `));
