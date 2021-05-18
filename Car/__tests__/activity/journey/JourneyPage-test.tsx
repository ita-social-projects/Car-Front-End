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
          <DriverBlock
            journey={null}
          />
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
