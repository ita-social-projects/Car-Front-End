import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Stop from "../../models/stop/Stop";
import Address from "../../models/Address";
import PassengerWithdrawalView from "../../src/components/notifications/notifications-types/notifications-views/withdrawn-view/PassengerWithdrawalView";

const renderer = shallowRender.createRenderer();

const address: Address = {
    id: 1,
    name: "Address",
    latitude: 1,
    longitude: 1,
};
const stops: Stop[] = [
    {
        address: address,
        id: 1,
        journeyId: 1,
        type: 0,
        userId: 0,
        index: 0,
        isCancelled: false,
    },
    {
        address: address,
        id: 2,
        journeyId: 1,
        type: 1,
        userId: 0,
        index: 1,
        isCancelled: false,
    },
    {
        address: address,
        id: 3,
        journeyId: 1,
        type: 2,
        userId: 0,
        index: 2,
        isCancelled: false,
    },
];
const jsonData = JSON.stringify({
    journeyId: 1,
    applicantStops: stops,
});

test("renders correctly", async () =>
    expect(
        renderer.render(
            <PassengerWithdrawalView
                route={{
                    params: {
                        notification: {
                            sender: {
                                id: 0,
                                name: "Abc",
                                surname: "Abc",
                                position: "Abc",
                                location: "Abc",
                                email: "Abc",
                                fcmtoken: null,
                                hireDate: new Date("2021-01-01T20:00:00.000Z"),
                                imageId: null,
                                journeyCount: 0,
                                phoneNumber: null,
                                isPolicyAccepted: true,
                            },
                            receiver: {
                                id: 1,
                                name: "Abc",
                                surname: "Abc",
                                position: "Abc",
                                location: "Abc",
                                email: "Abc",
                                fcmtoken: null,
                                hireDate: new Date("2021-01-01T20:00:00.000Z"),
                                imageId: null,
                                journeyCount: 0,
                                phoneNumber: null,
                                isPolicyAccepted: true,
                            },

                            journeyId: 0,
                            notificationData: jsonData,
                            notificationId: 0,
                        },
                    },
                }}
            />
        )
    ).toMatchInlineSnapshot(`
    <React.Fragment>
      <View
        style={
          Array [
            undefined,
            Object {
              "backgroundColor": "#FFFFFF",
            },
          ]
        }
      >
        <NotificationHeader
          sender={
            Object {
              "email": "Abc",
              "fcmtoken": null,
              "hireDate": 2021-01-01T20:00:00.000Z,
              "id": 0,
              "imageId": null,
              "isPolicyAccepted": true,
              "journeyCount": 0,
              "location": "Abc",
              "name": "Abc",
              "phoneNumber": null,
              "position": "Abc",
              "surname": "Abc",
            }
          }
        />
        <ScrollView
          style={
            Object {
              "flexGrow": 1,
            }
          }
        >
          <View
            style={
              Array [
                undefined,
                Object {
                  "borderBottomColor": "#AAA9AE",
                  "borderTopColor": "#AAA9AE",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  undefined,
                  Object {
                    "color": "#0B171B",
                  },
                ]
              }
            >
              The passenger has withdrawn your ride!
            </Text>
          </View>
          <NotificationRideDetails
            journeyId={0}
            userId={0}
          />
          <Text
            style={
              Object {
                "color": "#0B171B",
              }
            }
          >
            Abc
            Abc
            \`s stops
          </Text>
          <View>
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
          </View>
        </ScrollView>
        <NotificationButtonGroup>
          <NotificationConfirmButton
            confirmText="Ok"
            onConfirm={[Function]}
          />
        </NotificationButtonGroup>
      </View>
    </React.Fragment>
  `));
