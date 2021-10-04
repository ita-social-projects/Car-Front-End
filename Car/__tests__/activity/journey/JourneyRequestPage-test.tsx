import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyRequestPage from "../../../src/activity/journey/journey-activity/journey-request-page/JourneyRequestPage";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler");
jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", async () =>
    expect(
        renderer.render(<JourneyRequestPage route={{ params: { journeyId: 1 } }} />)
    ).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignItems": "center",
            "flex": 1,
          },
          Object {
            "backgroundColor": "#88FF88",
          },
        ]
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Proxima Nova Extrabold",
            },
            Object {
              "color": "#222222",
            },
          ]
        }
      >
        Map implementation is in progress
      </Text>
      <BottomPopup
        enabledInnerScrolling={false}
        initialSnap={1}
        onCloseEnd={[Function]}
        refForChild={[Function]}
        renderContent={
          <KeyboardAwareScrollView
            enableAutomaticScroll={true}
            enableOnAndroid={true}
            enableResetScrollToCoords={true}
            extraHeight={75}
            extraScrollHeight={0}
            keyboardOpeningTime={250}
            style={
              Array [
                Object {
                  "height": 400,
                },
                Object {
                  "backgroundColor": "white",
                },
              ]
            }
            viewIsInsideTabBar={false}
          >
            <View
              style={
                Object {
                  "alignSelf": "center",
                  "width": "90%",
                }
              }
            >
              <View
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "space-around",
                  }
                }
              >
                <View
                  style={
                    Object {
                      "alignItems": "flex-start",
                      "justifyContent": "space-around",
                      "margin": 7,
                      "marginLeft": 13,
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
                      "flex": 5,
                      "flexDirection": "column",
                      "justifyContent": "space-around",
                    }
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Open Sans Regular",
                          "fontSize": 15,
                          "fontWeight": "700",
                        },
                        Object {
                          "color": "black",
                        },
                      ]
                    }
                  >
                     
                    's ride
                  </Text>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                        "justifyContent": "space-between",
                      }
                    }
                  >
                    <Text
                      style={
                        Array [
                          Object {
                            "fontFamily": "Open Sans Regular",
                            "fontSize": 13,
                            "fontWeight": "100",
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
                    "paddingLeft": 60,
                    "paddingRight": 16,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans ExtraBold",
                        "fontSize": 13,
                        "fontWeight": "700",
                      },
                      Object {
                        "color": "#02A2CF",
                      },
                    ]
                  }
                >
                  Invalid date
                </Text>
                <Text
                  style={
                    Array [
                      Object {
                        "textAlign": "right",
                      },
                      Object {
                        "color": "black",
                      },
                    ]
                  }
                >
                  Paid
                </Text>
              </View>
              <View
                style={
                  Object {
                    "height": 27,
                  }
                }
              />
              <Themed.Divider
                style={
                  Array [
                    Object {
                      "height": 1,
                      "marginBottom": 7,
                      "marginTop": 7,
                      "width": "100%",
                    },
                    Object {
                      "backgroundColor": "#C1C1C5",
                    },
                  ]
                }
              />
              <View
                style={
                  Object {
                    "paddingHorizontal": 15,
                    "paddingTop": 8,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans Bold",
                        "fontWeight": "700",
                        "paddingBottom": 4,
                      },
                      Object {
                        "color": "#414045",
                      },
                    ]
                  }
                >
                  Comments
                </Text>
                <Comments />
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans Regular",
                        "fontSize": 13,
                        "lineHeight": 18,
                        "paddingTop": 4,
                      },
                      Object {
                        "color": "#000000",
                      },
                    ]
                  }
                >
                  Up to 100 symbols
                </Text>
              </View>
              <View
                style={
                  Object {
                    "paddingHorizontal": 15,
                    "paddingVertical": 17,
                  }
                }
              >
                <Luggage />
              </View>
              <View
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "marginBottom": 10,
                    "marginTop": 20,
                  }
                }
              >
                <ForwardRef
                  disabled={false}
                  onPress={[Function]}
                  style={
                    Array [
                      Object {
                        "alignItems": "center",
                        "borderWidth": 3,
                        "height": 50,
                        "justifyContent": "center",
                        "paddingHorizontal": 15,
                      },
                      Object {
                        "backgroundColor": "white",
                        "borderColor": "black",
                      },
                      false,
                    ]
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontSize": 18,
                          "fontWeight": "700",
                          "textTransform": "uppercase",
                        },
                        Object {
                          "color": "black",
                        },
                      ]
                    }
                  >
                    Confirm
                  </Text>
                </ForwardRef>
              </View>
            </View>
            <View
              style={
                Array [
                  Object {
                    "height": 100,
                    "position": "absolute",
                    "top": -10,
                    "width": 750,
                    "zIndex": -1,
                  },
                  Object {
                    "backgroundColor": "white",
                  },
                ]
              }
            />
          </KeyboardAwareScrollView>
        }
        renderHeader={<React.Fragment />}
        snapPoints={
          Array [
            412,
            0,
          ]
        }
        style={
          Object {
            "backgroundColor": "white",
          }
        }
      />
    </View>
  `));
