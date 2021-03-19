import React from "react";
import renderer from "react-test-renderer";
import JourneyCardList from "../../src/components/journey-card/JourneyCardList";

test("renders correctly", () =>
    expect(
        renderer.create(<JourneyCardList journey={[]} />).toJSON()
    ).toMatchInlineSnapshot("<View />"));

test("renders correctly", () =>
    expect(
        renderer
            .create(
                <JourneyCardList
                    journey={[
                        {
                            id: 1,
                            organizer: {
                                id: 1,
                                name: "ABC",
                                surname: "BCD",
                                position: "CDE",
                            },
                            departureTime: "",
                            participants: [
                                {
                                    id: 2,
                                    name: "ABC",
                                    surname: "BCD",
                                    position: "CDE",
                                },
                                {
                                    id: 3,
                                    name: "ABC",
                                    surname: "BCD",
                                    position: "CDE",
                                },
                            ],
                            stops: [{}, {}],
                        },
                    ]}
                />
            )
            .toJSON()
    ).toMatchInlineSnapshot(`
    <View>
      <View>
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
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "borderRadius": 1000,
                          "justifyContent": "center",
                        },
                        Object {
                          "backgroundColor": "#d1d8a6",
                          "height": 38.5,
                          "width": 38.5,
                        },
                      ]
                    }
                  >
                    <Text
                      style={
                        Array [
                          Object {
                            "color": "#FFFFFF",
                            "fontFamily": "Open Sans",
                            "fontWeight": "700",
                            "textTransform": "uppercase",
                          },
                          Object {
                            "fontSize": 15.4,
                            "lineHeight": 15.4,
                            "paddingTop": 2.75,
                          },
                        ]
                      }
                    >
                      AB
                    </Text>
                  </View>
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
                            "fontFamily": undefined,
                            "fontSize": 16,
                            "fontWeight": "700",
                            "lineHeight": 16,
                          }
                        }
                      >
                        ABC BCD
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
                          allowFontScaling={false}
                          style={
                            Array [
                              Object {
                                "color": "black",
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
                          
                        </Text>
                      </View>
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
                    >
                      CDE
                    </Text>
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
          </View>
        </View>
      </View>
    </View>
  `));
