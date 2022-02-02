import React from "react";
import renderer from "react-test-renderer";
import MyProfile from "../../../src/activity/my-profile/MyProfile";

test("renders correctly", async () =>
    expect(renderer.create(<MyProfile navigation={undefined} />).toJSON())
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
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
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Details
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
                      Object {
                        "transform": Array [
                          Object {
                            "rotate": "90deg",
                          },
                        ],
                      },
                      Object {
                        "fontFamily": "Ionicons",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                      },
                      Object {},
                    ]
                  }
                >
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Preferences
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
                <Image
                  source={
                    Object {
                      "testUri": "../../../assets/images/icons/darkCar.png",
                    }
                  }
                  style={
                    Object {
                      "borderRadius": 0,
                      "height": 20,
                      "resizeMode": "contain",
                      "width": 20,
                    }
                  }
                />
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  My Cars
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
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Address Book
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
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Settings
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
                  
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Array [
                      Object {
                        "fontWeight": "bold",
                      },
                      Object {
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Badges
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
