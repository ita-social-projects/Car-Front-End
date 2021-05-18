import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyPage from "../../../src/activity/journey/journey-activity/journey-page/JourneyPage";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

const props = {
    route: {
        params: {
            journeyId: 1,
            isDriver: false,
            isPassenger: false,
        },
    },
};

test("renders correctly", async () =>
    expect(renderer.render(<JourneyPage props={props} />)).toMatchInlineSnapshot(`
    <React.Fragment>
      <View
        style={
          Array [
            Object {
              "flex": 1,
            },
            Object {
              "backgroundColor": "#88FF88",
            },
          ]
        }
      >
        <MapView
          customMapStyle={
            Array [
              Object {
                "featureType": "poi.business",
                "stylers": Array [
                  Object {
                    "visibility": "off",
                  },
                ],
              },
              Object {
                "elementType": "labels.text",
                "featureType": "poi.park",
                "stylers": Array [
                  Object {
                    "visibility": "off",
                  },
                ],
              },
            ]
          }
          provider="google"
          showsCompass={false}
          showsMyLocationButton={false}
          showsUserLocation={true}
          style={
            Object {
              "flex": 1,
            }
          }
        />
      </View>
      <BottomPopup
        enabledGestureInteraction={true}
        enabledInnerScrolling={true}
        initialSnap={1}
        refForChild={
          Object {
            "current": null,
          }
        }
        renderContent={
          <View
            style={
              Object {
                "backgroundColor": "#FFFFFF",
                "height": "100%",
                "width": "100%",
              }
            }
          >
            <View
              style={
                Object {
                  "height": 300,
                }
              }
            >
              <ScrollView
                nestedScrollEnabled={true}
                style={
                  Array [
                    Object {
                      "alignSelf": "center",
                      "paddingHorizontal": "5%",
                      "width": "100%",
                    },
                    Object {
                      "backgroundColor": "#FFFFFF",
                    },
                  ]
                }
              >
                <CarBlock
                  car={null}
                />
                <StopsBlock
                  stops={Array []}
                />
                <ParticipantsBlock
                  journey={null}
                />
              </ScrollView>
            </View>
            <ButtonBlock
              isDriver={false}
              isPassenger={false}
              isRequested={false}
              journey={null}
            />
          </View>
        }
        renderHeader={
          <View
            style={
              Array [
                Object {
                  "alignSelf": "center",
                  "paddingHorizontal": "5%",
                  "width": "100%",
                },
                Object {
                  "backgroundColor": "white",
                },
              ]
            }
          >
            <ForwardRef
              onPress={[Function]}
              style={
                Object {
                  "flexDirection": "row",
                  "justifyContent": "space-around",
                  "paddingLeft": 2,
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
                        "fontFamily": "Open Sans",
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
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "100",
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
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "700",
                        },
                        Object {
                          "color": "#02A2CF",
                        },
                      ]
                    }
                  >
                    01/01/1970
                  </Text>
                </View>
              </View>
            </ForwardRef>
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
                    "width": "100%",
                  },
                  Object {
                    "backgroundColor": "#C1C1C5",
                  },
                ]
              }
            />
          </View>
        }
        snapPoints={
          Array [
            683,
            0,
          ]
        }
        style={
          Object {
            "backgroundColor": "white",
          }
        }
      />
    </React.Fragment>
  `));
