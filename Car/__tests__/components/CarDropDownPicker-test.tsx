import React from "react";
import renderer from "react-test-renderer";
import CarDropDownPicker from "../../src/components/car-drop-down-picker/CarDropDownPicker";

test("renders correctly", () =>
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
          accessible={true}
          focusable={true}
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
              "backgroundColor": "white",
              "borderBottomLeftRadius": 0,
              "borderBottomRightRadius": 0,
              "borderColor": "black",
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
                Object {},
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
                Object {
                  "flex": 1,
                  "opacity": 1,
                },
                Object {
                  "marginLeft": 5,
                  "marginRight": 0,
                },
                false,
                Object {
                  "marginLeft": 5,
                },
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
                      "color": "black",
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
                "backgroundColor": "#fff",
                "borderBottomLeftRadius": 5,
                "borderBottomRightRadius": 5,
                "borderColor": "#dfdfdf",
                "borderTopLeftRadius": 5,
                "borderTopRightRadius": 5,
                "borderWidth": 1,
                "paddingHorizontal": 10,
                "paddingVertical": 5,
              },
              Object {
                "alignItems": "center",
                "borderTopLeftRadius": 0,
                "borderTopRightRadius": 0,
                "justifyContent": "center",
                "position": "absolute",
                "width": "100%",
              },
              Array [
                Object {
                  "borderTopWidth": 0,
                  "borderWidth": 2,
                  "paddingHorizontal": 4,
                },
                Object {
                  "backgroundColor": "white",
                  "borderColor": "black",
                },
              ],
              Object {
                "borderWidth": 0,
                "display": "none",
                "position": "relative",
              },
              Object {
                "maxHeight": 333.5,
                "top": undefined,
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
              allowFontScaling={true}
              defaultValue={null}
              onChangeText={[Function]}
              placeholder="Manual input"
              placeholderTextColor="gray"
              rejectResponderTermination={true}
              style={
                Object {
                  "color": "black",
                }
              }
              underlineColorAndroid="transparent"
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
                      "color": "black",
                    }
                  }
                >
                  Not Found
                </Text>
              </View>
            </View>
          </RCTScrollView>
        </View>
      </View>
    </View>
  `));
