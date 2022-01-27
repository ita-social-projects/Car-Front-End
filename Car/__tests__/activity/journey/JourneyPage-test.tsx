import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyPage from "../../../src/activity/journey/journey-activity/journey-page/JourneyPage";
import JourneyPageProps from "../../../src/activity/journey/journey-activity/journey-page/JourneyPageProps";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

const props: JourneyPageProps = {
    route: {
        params: {
            journeyId: 1,
            isDriver: false,
            isPassenger: false,
            applicantStops: [],
            isPast: false,
            isCanceled: false
        },
    },
    moreOptionsPopupIsOpen: false,
    closeMoreOptionsPopup: () => 0,
};

test("renders correctly", async () =>
    expect(renderer.render(<JourneyPage props={props} />)).toMatchInlineSnapshot(`
    <React.Fragment>
      <TouchableWithoutFeedback
        onPress={[Function]}
      >
        <View
          style={
            Array [
              Object {
                "flex": 1,
              },
              Object {
                "backgroundColor": "#A5C500",
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
      </TouchableWithoutFeedback>
      <Unknown>
        <BottomPopup
          enabledGestureInteraction={true}
          enabledInnerScrolling={true}
          initialSnap={1}
          refForChild={[Function]}
          renderContent={
            <TouchableWithoutFeedback
              onPress={[Function]}
            >
              <View
                style={
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "height": "100%",
                    "width": "100%",
                  }
                }
              >
                <React.Fragment>
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
                      <StopsBlock
                        highlightedStops={
                          Array [
                            1,
                            2,
                          ]
                        }
                        onStopPress={[Function]}
                        stops={Array []}
                      />
                      <CarBlock
                        car={null}
                        isOnOwnCar={false}
                      />
                      <ParticipantsBlock
                        journey={null}
                      />
                    </ScrollView>
                  </View>
                  <ButtonBlock
                    applicantStops={Array []}
                    isDriver={false}
                    isPassenger={false}
                    isRequested={false}
                    journey={null}
                    onSendRequestPress={[Function]}
                  />
                </React.Fragment>
              </View>
            </TouchableWithoutFeedback>
          }
          renderHeader={
            <DriverBlock
              journey={null}
            />
          }
          snapPoints={
            Array [
              515,
              0,
            ]
          }
          style={
            Object {
              "backgroundColor": "#FFFFFF",
            }
          }
        />
      </Unknown>
      <ConfirmModal
        cancelText="No, keep it"
        confirmText="Yes, cancel it"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="Are you sure you want to cancel the ride?"
        title="Ride canceling"
        visible={false}
      />
      <ConfirmModal
        confirmText="Ok"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Ride was successfully canceled"
        title="Ride canceling"
        visible={false}
      />
      <ConfirmModal
        confirmText="Ok"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Your request was successfully sent to the driver"
        title="Request sending"
        visible={false}
      />
      <ConfirmModal
        confirmText="OK"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Ride canceling is failed"
        title="Ride canceling"
        visible={false}
      />
    </React.Fragment>
  `));
