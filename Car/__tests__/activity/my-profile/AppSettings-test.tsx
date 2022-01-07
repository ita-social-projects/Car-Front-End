import React from "react";
import renderer from "react-test-renderer";
import AppSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/app-settings/AppSettings";

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", async () =>
    expect(renderer.create(<AppSettings navigation="" />).toJSON())
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingHorizontal": 5,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <View
        accessible={true}
        focusable={false}
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "borderBottomColor": "#AAA9AE",
            "opacity": 1,
          }
        }
      >
        <View
          style={
            Object {
              "alignItems": "center",
              "flexDirection": "row",
            }
          }
        >
          <View>
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View>
                <Text
                  allowFontScaling={false}
                  style={
                    Array [
                      Object {
                        "color": "#414045",
                        "fontSize": 20,
                      },
                      undefined,
                      Object {
                        "fontFamily": "Ionicons",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                      },
                      Object {},
                    ]
                  }
                >
                  
                </Text>
              </View>
            </View>
          </View>
          <View
            style={
              Object {
                "flex": 1,
              }
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Open Sans Bold",
                    "fontSize": 13,
                    "fontWeight": "700",
                    "lineHeight": 16,
                  },
                  Object {
                    "color": "#0B171B",
                  },
                ]
              }
            >
              Dark Mode
            </Text>
          </View>
          <View>
            <View
              accessible={true}
              focusable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                }
              }
            >
              <View
                style={
                  Object {
                    "alignItems": "center",
                    "backgroundColor": "rgba(196, 196, 196, 1)",
                    "borderColor": "#C4C4C4",
                    "borderRadius": 12,
                    "borderWidth": 1,
                    "flexDirection": "row",
                    "height": 20,
                    "padding": 2,
                    "width": 36,
                  }
                }
              >
                <View>
                  <Text />
                </View>
                <View
                  style={
                    Object {
                      "backgroundColor": "rgba(255, 255, 255, 1)",
                      "borderRadius": 8,
                      "height": 16,
                      "transform": Array [
                        Object {
                          "translateX": 0,
                        },
                      ],
                      "width": 16,
                    }
                  }
                >
                  <View>
                    <Text />
                  </View>
                </View>
                <View>
                  <Text />
                </View>
                <View
                  style={
                    Object {
                      "position": "absolute",
                      "right": 5,
                    }
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View
          accessible={true}
          focusable={true}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "borderBottomColor": "#AAA9AE",
              "opacity": 1,
            }
          }
        >
          <View>
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View>
                <Text
                  allowFontScaling={false}
                  style={
                    Array [
                      Object {
                        "color": "#414045",
                        "fontSize": 20,
                      },
                      undefined,
                      Object {
                        "fontFamily": "Ionicons",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                      },
                      Object {},
                    ]
                  }
                >
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Object {
                      "fontFamily": "Open Sans Bold",
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    }
                  }
                >
                  Language
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={
                Array [
                  Object {
                    "color": "#414045",
                    "fontSize": 20,
                  },
                  undefined,
                  Object {
                    "fontFamily": "Ionicons",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                  },
                  Object {},
                ]
              }
            >
              
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          accessible={true}
          focusable={true}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "borderBottomColor": "#AAA9AE",
              "opacity": 1,
            }
          }
        >
          <View>
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View>
                <Text
                  allowFontScaling={false}
                  style={
                    Array [
                      Object {
                        "color": "#414045",
                        "fontSize": 20,
                      },
                      undefined,
                      Object {
                        "fontFamily": "Ionicons",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                      },
                      Object {},
                    ]
                  }
                >
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Object {
                      "fontFamily": "Open Sans Bold",
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    }
                  }
                >
                  Payment
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={
                Array [
                  Object {
                    "color": "#414045",
                    "fontSize": 20,
                  },
                  undefined,
                  Object {
                    "fontFamily": "Ionicons",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                  },
                  Object {},
                ]
              }
            >
              
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          accessible={true}
          focusable={true}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "borderBottomColor": "#AAA9AE",
              "opacity": 1,
            }
          }
        >
          <View>
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <View>
                <Text
                  allowFontScaling={false}
                  style={
                    Array [
                      Object {
                        "color": "#414045",
                        "fontSize": 20,
                      },
                      undefined,
                      Object {
                        "fontFamily": "Ionicons",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                      },
                      Object {},
                    ]
                  }
                >
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Object {
                      "fontFamily": "Open Sans Bold",
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    }
                  }
                >
                  Help Center
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={
                Array [
                  Object {
                    "color": "#414045",
                    "fontSize": 20,
                  },
                  undefined,
                  Object {
                    "fontFamily": "Ionicons",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                  },
                  Object {},
                ]
              }
            >
              
            </Text>
          </View>
        </View>
      </View>
    </View>
  `));
