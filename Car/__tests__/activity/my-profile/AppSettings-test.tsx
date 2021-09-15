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
            "backgroundColor": "white",
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
            "borderBottomColor": "rgba(0,0,0,0.5)",
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
                    "fontFamily": "Open Sans",
                    "fontSize": 13,
                    "fontWeight": "700",
                    "lineHeight": 16,
                  },
                  Object {
                    "color": "black",
                  },
                ]
              }
            >
              Dark Mode
            </Text>
          </View>
          <View>
            <RCTSwitch
              accessibilityRole="switch"
              onChange={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Array [
                  Object {
                    "height": 31,
                    "width": 51,
                  },
                  Object {
                    "height": 28,
                    "width": 36,
                  },
                ]
              }
              value={false}
            />
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
              "borderBottomColor": "rgba(0,0,0,0.5)",
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
                      "fontFamily": "Open Sans",
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
              "borderBottomColor": "rgba(0,0,0,0.5)",
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
                      "fontFamily": "Open Sans",
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
              "borderBottomColor": "rgba(0,0,0,0.5)",
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
                      "fontFamily": "Open Sans",
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
