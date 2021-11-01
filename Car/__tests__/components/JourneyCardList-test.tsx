import React from "react";
import renderer from "react-test-renderer";
import CarViewModel from "../../models/car/CarViewModel";
import Journey from "../../models/journey/Journey";
import Schedule from "../../models/Schedule";
import JourneyCardList from "../../src/components/journey-card/JourneyCardList";

let journeys: Journey[] = [
  {
    id: 1,
    routeDistance: 0,
    duration: "",
    departureTime: new Date(0),
    countOfSeats: 0,
    comments: "",
    isFree: true,
    isOnOwnCar: true,
    schedule: null as Schedule,
    journeyPoints: [],
    participants: [
      {
        id: 1,
        name: "",
        surname: "",
        position: "",
        location: "",
        token: "",
        fcmtoken: "",
        email: "",
        hireDate: new Date(0),
        imageId: "",
        journeyCount: 0,
        phoneNumber: 0,
      },
    ],
    stops: [],
    invitations: [],
    organizer: {
      id: 1,
      name: "",
      surname: "",
      position: "",
      location: "",
      token: "",
      fcmtoken: "",
      email: "",
      hireDate: new Date(0),
      imageId: "",
      journeyCount: 0,
      phoneNumber: 0,
    },
    car: {} as CarViewModel,
  },
];

test("renders correctly", async () =>
  expect(
    renderer.create(<JourneyCardList journey={[]} />).toJSON()
  ).toMatchInlineSnapshot("<View />"));

test("renders correctly", async () =>
  expect(renderer.create(<JourneyCardList journey={journeys} />).toJSON())
    .toMatchInlineSnapshot(`
    <View>
      <View>
        <View>
          <View
            accessible={true}
            collapsable={false}
            focusable={true}
            nativeID="animatedComponent"
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
                      Object {
                        "paddingBottom": 5.75,
                      },
                    ]
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
                          "backgroundColor": "#52bb13",
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
                            "fontFamily": "Open Sans Bold",
                            "fontWeight": "700",
                            "textTransform": "uppercase",
                          },
                          Object {
                            "color": "#FFFFFF",
                            "fontSize": 15.4,
                            "lineHeight": 15.4,
                            "paddingTop": 2.75,
                          },
                        ]
                      }
                    >
                      NaN
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
                      <View
                        accessible={true}
                        collapsable={false}
                        focusable={true}
                        nativeID="animatedComponent"
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
                    >
                      
                    </Text>
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
                  01/01/1970
                </Text>
                <View>
                  <Text
                    style={
                      Object {
                        "color": "#0B171B",
                        "fontFamily": "Open Sans Regular",
                        "fontSize": 11,
                        "lineHeight": 16,
                        "paddingTop": 0,
                        "textAlign": "right",
                      }
                    }
                  >
                    Free
                  </Text>
                </View>
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
          </View>
        </View>
      </View>
    </View>
  `));
