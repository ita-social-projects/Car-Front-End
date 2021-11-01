import React from "react";
import renderer from "react-test-renderer";
import CarDropDownPicker from "../../src/components/car-drop-down-picker/CarDropDownPicker";

test("renders correctly", async () =>
  expect(renderer.create(<CarDropDownPicker />).toJSON())
    .toMatchInlineSnapshot(`
    <View>
      <View
        style={
          Array [
            Array [
              Object {
                "height": 48,
              },
              undefined,
            ],
            Object {
              "zIndex": 5000,
            },
          ]
        }
      >
        <View
          accessibilityState={
            Object {
              "disabled": false,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={true}
          forwardedRef={[Function]}
          nativeID="animatedComponent"
          onClick={[Function]}
          onLayout={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "#FFFFFF",
              "borderBottomLeftRadius": 0,
              "borderBottomRightRadius": 0,
              "borderColor": "#0B171B",
              "borderTopLeftRadius": 0,
              "borderTopRightRadius": 0,
              "borderWidth": 2,
              "flex": 1,
              "flexDirection": "row",
              "opacity": 1,
              "paddingHorizontal": 10,
              "paddingVertical": 5,
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "color": "#000",
                },
                Object {},
                Object {
                  "flex": 1,
                  "opacity": 1,
                },
                Object {
                  "marginLeft": 5,
                  "marginRight": 0,
                },
                [Function],
                Object {
                  "color": "#0B171B",
                },
                false,
                Array [
                  Object {
                    "fontSize": 16,
                    "lineHeight": 24,
                    "paddingVertical": 10,
                  },
                  undefined,
                  Object {
                    "color": "#909095",
                  },
                ],
              ]
            }
          >
            Select an item
          </Text>
          <View
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "borderBottomLeftRadius": 0,
                  "borderTopLeftRadius": 0,
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "paddingVertical": 8,
                },
              ]
            }
          >
            <View
              style={
                Array [
                  Object {},
                  Object {
                    "opacity": 1,
                  },
                ]
              }
            >
              <Text
                allowFontScaling={false}
                style={
                  Array [
                    Object {
                      "color": "#0B171B",
                      "fontSize": 14,
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
                
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              Object {
                "alignItems": "center",
                "backgroundColor": "#FFFFFF",
                "borderBottomLeftRadius": 5,
                "borderBottomRightRadius": 5,
                "borderColor": "#0B171B",
                "borderTopLeftRadius": 0,
                "borderTopRightRadius": 0,
                "borderTopWidth": 0,
                "borderWidth": 2,
                "justifyContent": "center",
                "paddingHorizontal": 4,
                "paddingVertical": 5,
                "position": "absolute",
                "width": "100%",
              },
              Object {
                "borderWidth": 0,
                "display": "none",
                "position": "relative",
              },
              Object {
                "maxHeight": 333.5,
                "top": 0,
                "zIndex": 5000,
              },
            ]
          }
        >
          <View
            style={
              Object {
                "flexDirection": "row",
                "width": "100%",
              }
            }
          >
            <TextInput
              defaultValue={null}
              onChangeText={[Function]}
              placeholder="Manual input"
              placeholderTextColor="#909095"
              style={
                Object {
                  "color": "#0B171B",
                }
              }
            />
          </View>
          <RCTScrollView
            nestedScrollEnabled={true}
            style={
              Object {
                "width": "100%",
              }
            }
          >
            <View>
              <View
                style={
                  Object {
                    "alignItems": "center",
                    "marginBottom": 15,
                    "marginVertical": 10,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#0B171B",
                    }
                  }
                >
                  Not found
                </Text>
              </View>
            </View>
          </RCTScrollView>
        </View>
      </View>
    </View>
  `));

test("renders correctly", async () =>
  expect(renderer.create(<CarDropDownPicker required={true} />).toJSON())
    .toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "justifyContent": "center",
        }
      }
    >
      <Text
        style={
          Array [
            Object {
              "left": 18,
              "position": "absolute",
              "top": 15,
            },
            Object {
              "zIndex": undefined,
            },
            Object {
              "color": "#D80056",
            },
          ]
        }
      >
        *
      </Text>
      <View
        style={
          Array [
            Array [
              Object {
                "height": 48,
              },
              undefined,
            ],
            Object {
              "zIndex": 5000,
            },
          ]
        }
      >
        <View
          accessibilityState={
            Object {
              "disabled": false,
            }
          }
          accessible={true}
          focusable={true}
          forwardedRef={[Function]}
          onClick={[Function]}
          onLayout={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "#FFFFFF",
              "borderBottomLeftRadius": 0,
              "borderBottomRightRadius": 0,
              "borderColor": "#0B171B",
              "borderTopLeftRadius": 0,
              "borderTopRightRadius": 0,
              "borderWidth": 2,
              "flex": 1,
              "flexDirection": "row",
              "opacity": 1,
              "paddingHorizontal": 10,
              "paddingVertical": 5,
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "color": "#000",
                },
                Object {},
                Object {
                  "flex": 1,
                  "opacity": 1,
                },
                Object {
                  "marginLeft": 5,
                  "marginRight": 0,
                },
                [Function],
                Object {
                  "color": "#0B171B",
                },
                false,
                Array [
                  Object {
                    "fontSize": 16,
                    "lineHeight": 24,
                    "paddingVertical": 10,
                  },
                  Object {
                    "paddingLeft": 12,
                  },
                  Object {
                    "color": "#909095",
                  },
                ],
              ]
            }
          >
            Select an item
          </Text>
          <View
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "borderBottomLeftRadius": 0,
                  "borderTopLeftRadius": 0,
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "paddingVertical": 8,
                },
              ]
            }
          >
            <View
              style={
                Array [
                  Object {},
                  Object {
                    "opacity": 1,
                  },
                ]
              }
            >
              <Text
                allowFontScaling={false}
                style={
                  Array [
                    Object {
                      "color": "#0B171B",
                      "fontSize": 14,
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
                
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              Object {
                "alignItems": "center",
                "backgroundColor": "#FFFFFF",
                "borderBottomLeftRadius": 5,
                "borderBottomRightRadius": 5,
                "borderColor": "#0B171B",
                "borderTopLeftRadius": 0,
                "borderTopRightRadius": 0,
                "borderTopWidth": 0,
                "borderWidth": 2,
                "justifyContent": "center",
                "paddingHorizontal": 4,
                "paddingVertical": 5,
                "position": "absolute",
                "width": "100%",
              },
              Object {
                "borderWidth": 0,
                "display": "none",
                "position": "relative",
              },
              Object {
                "maxHeight": 333.5,
                "top": 0,
                "zIndex": 5000,
              },
            ]
          }
        >
          <View
            style={
              Object {
                "flexDirection": "row",
                "width": "100%",
              }
            }
          >
            <TextInput
              defaultValue={null}
              onChangeText={[Function]}
              placeholder="Manual input"
              placeholderTextColor="#909095"
              style={
                Object {
                  "color": "#0B171B",
                }
              }
            />
          </View>
          <RCTScrollView
            nestedScrollEnabled={true}
            style={
              Object {
                "width": "100%",
              }
            }
          >
            <View>
              <View
                style={
                  Object {
                    "alignItems": "center",
                    "marginBottom": 15,
                    "marginVertical": 10,
                  }
                }
              >
                <Text
                  style={
                    Object {
                      "color": "#0B171B",
                    }
                  }
                >
                  Not found
                </Text>
              </View>
            </View>
          </RCTScrollView>
        </View>
      </View>
    </View>
  `));
