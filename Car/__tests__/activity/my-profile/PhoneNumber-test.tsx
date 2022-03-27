import React from "react";
import renderer from "react-test-renderer";
import PhoneNumber from "../../../src/activity/my-profile/my-profile-activity/details/phonenumber/PhoneNumber";

test("renders correctly", async () =>
  expect(
    renderer.create(<PhoneNumber navigation={undefined as any} />).toJSON()
  ).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "paddingHorizontal": 9,
        }
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
            "backgroundColor": "#FFFFFF",
            "borderColor": "#F8F8F8",
            "borderRadius": 16,
            "borderWidth": 1,
            "elevation": 7,
            "height": 142,
            "left": 0,
            "marginHorizontal": 14,
            "marginVertical": 3,
            "opacity": 1,
            "paddingTop": 10,
            "position": "absolute",
            "top": 0,
            "width": 722,
            "zIndex": 100,
          }
        }
      >
        <View
          style={
            Object {
              "paddingLeft": 17,
              "paddingTop": 5,
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
            <View
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "borderRadius": 1000,
                    "justifyContent": "center",
                  },
                  Object {
                    "backgroundColor": "#0B171B",
                    "height": 56,
                    "marginLeft": 8,
                    "marginTop": 14,
                    "width": 56,
                  },
                ]
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans Bold",
                      "fontWeight": "700",
                      "textTransform": "uppercase",
                    },
                    Object {
                      "color": "#FFFFFF",
                      "fontSize": 22.4,
                      "lineHeight": 22.4,
                      "paddingTop": 4,
                    },
                  ]
                }
              >
                
              </Text>
            </View>
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
                      "fontSize": 14,
                      "lineHeight": 14,
                      "marginBottom": 8,
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
                undefined rides as driver
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
                    },
                  ]
                }
              >
                undefined rides as passanger
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={
          Object {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "left": 8,
            "marginRight": 10,
            "paddingBottom": 0,
            "paddingTop": 16,
            "right": 8,
            "top": 145,
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
              <View />
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
              Do you agree to show your phone number to other registered users to contact you?
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
      <View
        style={
          Object {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "left": 8,
            "marginRight": 10,
            "paddingBottom": 0,
            "paddingTop": 16,
            "right": 8,
            "top": 145,
          }
        }
      >
        <View>
          <TextInput
            allowFontScaling={true}
            keyboardType="number-pad"
            multiline={false}
            onBlur={[Function]}
            onChangeText={[Function]}
            onFocus={[Function]}
            placeholder="Phone number"
            placeholderTextColor="#C4C4C4"
            rejectResponderTermination={true}
            style={
              Array [
                Object {
                  "borderWidth": 2,
                  "fontSize": 18,
                  "paddingLeft": 15,
                },
                Object {
                  "borderColor": "#C4C4C4",
                  "borderWidth": 1,
                  "color": "#C4C4C4",
                },
              ]
            }
            underlineColorAndroid="transparent"
            value=""
          />
          <View />
          <View />
        </View>
      </View>
    </View>
  `));
