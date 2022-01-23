import React from "react";
import shallowRender from "react-test-renderer/shallow";
import InvitationView from "../../src/components/notifications/notifications-types/notifications-views/invitation-view/InvitationView";
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
      <InvitationView
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
                "backgroundColor": "#ffffff",
              },
            ]
          }
        >
          <NotificationHeader
            message="The driver is inviting you to join a ride!"
            sender={
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
              }
            }
            title=""
          />
          <NotificationRideDetails
            journeyId={0}
            journeyUser={
              Object {
                "journeyId": 0,
                "passangersCount": 1,
                "userId": 0,
                "withBaggage": false,
              }
            }
            userId={0}
            withSeats={true}
          />
          <StopsBlock
            onStopPress={[Function]}
            stops={Array []}
          />
          <NotificationButtonGroup>
            <NotificationConfirmButton
              confirmText="Ok"
              onConfirm={[Function]}
            />
            <NotificationDeclineButton
              declineText="Decline"
              onDecline={[Function]}
            />
          </NotificationButtonGroup>
          <React.Fragment>
            <ConfirmModal
              cancelText="No, keep it"
              confirmText="Yes, decline"
              disableModal={[Function]}
              onConfirm={[Function]}
              subtitle="Are you sure you want to decline the invite?"
              title="ARE YOU SURE?"
              visible={false}
            />
            <ConfirmModal
              confirmText="Ok"
              disableModal={[Function]}
              hideCancelButton={true}
              onConfirm={[Function]}
              subtitle="Your refusal was successfully sent to the driver"
              title="Invitation is rejected"
              visible={false}
            />
            <ConfirmModal
              confirmText="Ok"
              disableModal={[Function]}
              hideCancelButton={true}
              onConfirm={[Function]}
              subtitle="You were successfully added to the ride!"
              title="Invitation is accepted!"
              visible={false}
            />
            <ConfirmModal
              confirmText="Ok"
              disableModal={[Function]}
              hideCancelButton={true}
              onConfirm={[Function]}
              subtitle="Failed to accept the invitation!"
              title="Error"
              visible={false}
            />
          </React.Fragment>
        </View>
      </ScrollView>
    </React.Fragment>
  `));
