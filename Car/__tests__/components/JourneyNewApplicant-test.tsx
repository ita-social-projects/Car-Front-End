import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyNewApplicant from "../../src/components/journey-new-applicant/JourneyNewApplicant";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <JourneyNewApplicant
                user={{ name: "Abc", surname: "Abc", position: "Abc" }}
                notificationData={`{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`}
                notificationId={0}
            />
        )
    ).toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        onPress={[Function]}
      >
        <NewNotification
          notificationTitle="New Applicant"
          user={
            Object {
              "name": "Abc",
              "position": "Abc",
              "surname": "Abc",
            }
          }
        />
      </ForwardRef>
      <Component
        animationType="fade"
        hardwareAccelerated={false}
        transparent={true}
        visible={true}
      >
        <View
          style={
            Array [
              undefined,
              Object {
                "backgroundColor": "rgba(0, 0, 0, 0.5)",
              },
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderColor": "rgba(151, 151, 151, 0.233556)",
                  "shadowColor": "#414045",
                },
              ]
            }
          >
            <View>
              <View>
                <Text
                  style={
                    Array [
                      undefined,
                      Object {
                        "color": "#000000",
                      },
                    ]
                  }
                >
                  New Applicant
                </Text>
              </View>
              <View>
                <ForwardRef
                  onPress={[Function]}
                >
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#02A2CF",
                        },
                      ]
                    }
                  >
                    Snooze
                  </Text>
                </ForwardRef>
              </View>
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                ]
              }
            >
              <AvatarLogo
                size={49}
                user={
                  Object {
                    "name": "Abc",
                    "position": "Abc",
                    "surname": "Abc",
                  }
                }
              />
              <View>
                <View>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#000000",
                        },
                      ]
                    }
                  >
                    Abc Abc
                  </Text>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#000000",
                        },
                      ]
                    }
                  >
                    Abc
                  </Text>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#000000",
                        },
                      ]
                    }
                  >
                    123 rides, 2 badges
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderColor": "rgba(151, 151, 151, 0.3)",
                  },
                ]
              }
            >
              <Text>
                Abc
              </Text>
              <View
                style={
                  Array [
                    undefined,
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomColor": "rgba(151, 151, 151, 0.3)",
                      "borderLeftColor": "rgba(0,0,0,0)",
                      "borderRightColor": "rgba(151, 151, 151, 0.3)",
                      "borderTopColor": "rgba(0,0,0,0)",
                    },
                  ]
                }
              />
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                ]
              }
            >
              <Text>
                I’m Traveling with a baggage.
              </Text>
              <View
                style={
                  Array [
                    undefined,
                    Object {
                      "backgroundColor": "#FFFFFF",
                      "borderBottomColor": "#C1C1C5",
                      "borderLeftColor": "rgba(0,0,0,0)",
                      "borderRightColor": "rgba(0,0,0,0)",
                      "borderTopColor": "rgba(0,0,0,0)",
                    },
                  ]
                }
              />
            </View>
            <View
              style={
                Array [
                  undefined,
                ]
              }
            >
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#000000",
                    },
                  ]
                }
              >
                Abc
                ’s stop in your Journey
              </Text>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.3rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="1rem"
                    />
                  </Circle>
                  <View
                    style={
                      Array [
                        undefined,
                        Object {
                          "borderColor": "#C1C1C5",
                        },
                      ]
                    }
                  />
                </View>
                <View>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#909095",
                        },
                      ]
                    }
                  >
                    Location A
                  </Text>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.5rem"
                    radius="0.75rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="0.35rem"
                    />
                  </Circle>
                  <View
                    style={
                      Array [
                        undefined,
                        Object {
                          "borderColor": "#C1C1C5",
                        },
                      ]
                    }
                  />
                </View>
                <View>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#909095",
                        },
                      ]
                    }
                  >
                    Stop A.1
                  </Text>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.1rem"
                  >
                    <LinearGradient
                      colors={
                        Array [
                          "#00A3CF",
                          "#5552A0",
                        ]
                      }
                      end={
                        Object {
                          "x": 1,
                          "y": 1,
                        }
                      }
                      start={
                        Object {
                          "x": 0,
                          "y": 0,
                        }
                      }
                      style={
                        Array [
                          undefined,
                          Object {
                            "backgroundColor": "#FFFFFF",
                          },
                        ]
                      }
                    />
                  </Circle>
                  <View
                    style={
                      Array [
                        undefined,
                        Object {
                          "borderColor": "#C1C1C5",
                        },
                      ]
                    }
                  />
                </View>
                <View>
                  <RNVirtualLinearTextGradient
                    colors={
                      Array [
                        "#00A3CF",
                        "#5552A0",
                      ]
                    }
                    end={
                      Object {
                        "x": 1,
                        "y": 0,
                      }
                    }
                    locations={
                      Array [
                        0,
                        1,
                      ]
                    }
                    start={
                      Object {
                        "x": 0,
                        "y": 0,
                      }
                    }
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#909095",
                        },
                      ]
                    }
                  >
                    <Text
                      style={
                        Array [
                          undefined,
                          Object {
                            "color": "#909095",
                          },
                        ]
                      }
                    >
                      Abc
                      's stop A.2 ‏
                    </Text>
                    <Text
                      style={
                        Object {
                          "fontFamily": "Open Sans",
                        }
                      }
                    >
                      (view on the map)
                    </Text>
                  </RNVirtualLinearTextGradient>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.3rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="1rem"
                    />
                  </Circle>
                </View>
                <View>
                  <Text
                    style={
                      Array [
                        undefined,
                        Object {
                          "color": "#909095",
                        },
                      ]
                    }
                  >
                    Location B (Your stop)
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    undefined,
                    undefined,
                    Object {
                      "backgroundColor": "black",
                    },
                  ]
                }
              >
                <Text
                  style={
                    Array [
                      undefined,
                      Object {
                        "color": "white",
                      },
                    ]
                  }
                >
                  Accept
                </Text>
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <Text
                  style={
                    Array [
                      undefined,
                      Object {
                        "color": "#EC6400",
                      },
                    ]
                  }
                >
                  Decline
                </Text>
              </ForwardRef>
            </View>
          </View>
        </View>
      </Component>
    </View>
  `));
