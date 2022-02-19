import React from "react";
import renderer from "react-test-renderer";
import MyProfile from "../../../src/activity/my-profile/MyProfile";

test("renders correctly", async () =>
    expect(renderer.create(<MyProfile navigation={undefined} />).toJSON())
        .toMatchInlineSnapshot(`
    <RCTScrollView>
      <View>
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
          <View
            style={
              Object {
                "alignItems": "center",
                "paddingBottom": 16,
                "paddingTop": 28,
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
                    "alignItems": "center",
                    "backgroundColor": "#0B171B",
                    "borderColor": "#0B171B",
                    "borderWidth": 1,
                    "color": "#FFFFFF",
                    "flexDirection": "row",
                    "height": 32,
                    "justifyContent": "center",
                    "opacity": 1,
                    "width": 82,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
                        "textTransform": "uppercase",
                      },
                      Object {
                        "backgroundColor": "#0B171B",
                        "borderColor": "#0B171B",
                        "color": "#FFFFFF",
                      },
                    ]
                  }
                >
                  Light
                </Text>
              </View>
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
                    "alignItems": "center",
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 1,
                    "borderColor": "#0B171B",
                    "borderRightWidth": 1,
                    "borderTopWidth": 1,
                    "color": "#0B171B",
                    "flexDirection": "row",
                    "height": 32,
                    "justifyContent": "center",
                    "opacity": 1,
                    "width": 80,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
                        "textTransform": "uppercase",
                      },
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  Dark
                </Text>
              </View>
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
                    "alignItems": "center",
                    "backgroundColor": "#FFFFFF",
                    "borderBottomWidth": 1,
                    "borderColor": "#0B171B",
                    "borderRightWidth": 1,
                    "borderTopWidth": 1,
                    "color": "#0B171B",
                    "flexDirection": "row",
                    "height": 32,
                    "justifyContent": "center",
                    "opacity": 1,
                    "width": 125,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
                        "textTransform": "uppercase",
                      },
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  As system
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
                          "testUri": "../../../assets/images/icons/my-profile/lightBadges.png",
                        }
                      }
                      style={
                        Object {
                          "borderRadius": 0,
                          "height": 22.5,
                          "resizeMode": "contain",
                          "width": 22.5,
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
                          "testUri": "../../../assets/images/icons/my-profile/lightPreferences.png",
                        }
                      }
                      style={
                        Object {
                          "borderRadius": 0,
                          "height": 22.5,
                          "resizeMode": "contain",
                          "width": 22.5,
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
                          "testUri": "../../../assets/images/icons/my-profile/lightCars.png",
                        }
                      }
                      style={
                        Object {
                          "borderRadius": 0,
                          "height": 22.5,
                          "resizeMode": "contain",
                          "width": 22.5,
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
                    <Image
                      source={
                        Object {
                          "testUri": "../../../assets/images/icons/my-profile/lightAddress.png",
                        }
                      }
                      style={
                        Object {
                          "borderRadius": 0,
                          "height": 22.5,
                          "resizeMode": "contain",
                          "width": 22.5,
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
          <View
            style={
              Object {
                "paddingTop": 21,
              }
            }
          >
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
                  "alignItems": "center",
                  "justifyContent": "center",
                  "opacity": 1,
                  "paddingRight": 17,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans ExtraBold",
                      "fontSize": 16,
                      "fontStyle": "normal",
                      "fontWeight": "bold",
                      "letterSpacing": 0.25,
                      "width": 62,
                    },
                    Object {
                      "color": "#EC6400",
                    },
                  ]
                }
              >
                Log out
              </Text>
            </View>
            <Modal
              animationType="fade"
              hardwareAccelerated={false}
              statusBarTranslucent={true}
              transparent={true}
              visible={false}
            >
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
                    "alignItems": "center",
                    "backgroundColor": "rgba(0, 0, 0, 0.5)",
                    "flex": 1,
                    "flexDirection": "column",
                    "justifyContent": "center",
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
                      "alignItems": "center",
                      "backgroundColor": "#FFFFFF",
                      "borderRadius": 16,
                      "height": 310,
                      "justifyContent": "center",
                      "opacity": 1,
                      "paddingBottom": 24,
                      "paddingHorizontal": 20,
                      "paddingTop": 32,
                      "paddingVertical": 30,
                      "width": 344,
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "color": "#0B171B",
                        "fontFamily": undefined,
                        "fontSize": 14,
                        "fontWeight": "700",
                        "lineHeight": 18,
                      }
                    }
                  >
                    ARE YOU SURE?
                  </Text>
                  <Text
                    style={
                      Object {
                        "color": "#909095",
                        "fontSize": 16,
                        "marginBottom": 40,
                        "marginHorizontal": 21.5,
                        "marginTop": 32,
                        "textAlign": "center",
                      }
                    }
                  >
                    You are about to logout from the App
                  </Text>
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
                        "alignItems": "center",
                        "backgroundColor": "#D80056",
                        "height": 56,
                        "marginBottom": 26,
                        "opacity": 1,
                        "paddingVertical": 18,
                        "width": 304,
                      }
                    }
                  >
                    <Text
                      style={
                        Array [
                          Object {
                            "color": "#0B171B",
                            "fontFamily": undefined,
                            "fontSize": 14,
                            "fontWeight": "700",
                            "lineHeight": 18,
                          },
                          Object {
                            "color": "#FFFFFF",
                          },
                        ]
                      }
                    >
                      Yes, log out
                    </Text>
                  </View>
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
                    <Text
                      style={
                        Object {
                          "color": "#0B171B",
                          "fontFamily": undefined,
                          "fontSize": 14,
                          "fontWeight": "700",
                          "lineHeight": 18,
                        }
                      }
                    >
                      No, stay
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "center",
                "paddingBottom": 35,
                "paddingTop": 40,
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
                  "opacity": 1,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "normal",
                      "lineHeight": 18,
                      "paddingRight": 16,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                Privacy Policy
              </Text>
            </View>
            <View>
              <Text
                style={
                  Object {
                    "color": "#909095",
                  }
                }
              >
                •
              </Text>
            </View>
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
                  "opacity": 1,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "normal",
                      "lineHeight": 18,
                      "paddingLeft": 16,
                      "paddingRight": 16,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                Terms of Service
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RCTScrollView>
  `));
