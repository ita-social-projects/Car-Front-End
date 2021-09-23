import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyNewApplicantView from "../../src/components/journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantView";
import Stop from "../../models/stop/Stop";
import Address from "../../models/Address";

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
            <JourneyNewApplicantView
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
                                token: "Abc",
                                fcmtoken: null,
                                hireDate: new Date("2021-01-01T20:00:00.000Z"),
                                imageId: null,
                                journeyCount: 0,
                                phoneNumber: null,
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
              },
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
              ]
            }
          >
            <View>
              <AvatarLogoTitle
                userToDisplay={
                  Object {
                    "email": "Abc",
                    "fcmtoken": null,
                    "hireDate": 2021-01-01T20:00:00.000Z,
                    "id": 0,
                    "imageId": null,
                    "journeyCount": 0,
                    "location": "Abc",
                    "name": "Abc",
                    "phoneNumber": null,
                    "position": "Abc",
                    "surname": "Abc",
                    "token": "Abc",
                  }
                }
              />
            </View>
          </View>
          <View>
            <RequestComment />
          </View>
          <WithLuggage />
          <Text>
            A
             stops in your ride
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
          <NotificationButtonGroup>
            <NotificationConfirmButton
              confirmText="ACCEPT"
              onConfirm={[Function]}
            />
            <NotificationDeclineButton
              declineText="Decline"
              onDecline={[Function]}
            />
          </NotificationButtonGroup>
          <ConfirmModal
            confirmText="Ok"
            disableModal={[Function]}
            hideCancelButton={true}
            onConfirm={[Function]}
            subtitle="Your approvement was successfully sent to the applicant!"
            title="Request is approved"
            visible={false}
          />
          <ConfirmModal
            confirmText="Ok"
            disableModal={[Function]}
            hideCancelButton={true}
            onConfirm={[Function]}
            subtitle="Your rejection was successfully sent to the applicant!"
            title="Request is declined"
            visible={false}
          />
          <ConfirmModal
            cancelText="No, keep it"
            confirmText="Yes, decline"
            disableModal={[Function]}
            onConfirm={[Function]}
            subtitle="Are you sure you want to decline passanger's request?"
            title="ARE YOU SURE?"
            visible={false}
          />
          <ConfirmModal
            confirmText="Ok"
            disableModal={[Function]}
            hideCancelButton={true}
            onConfirm={[Function]}
            subtitle="Failed to add the user to the ride!"
            title="Error"
            visible={false}
          />
        </View>
      </View>
    </React.Fragment>
  `));
