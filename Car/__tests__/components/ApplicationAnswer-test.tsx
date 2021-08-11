import React from "react";
import shallowRender from "react-test-renderer/shallow";
import ApplicationAnswer from "../../src/components/notifications/notifications-types/ApplicationAnswer";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <ApplicationAnswer
                notification={{
                    sender: {
                        id: 0,
                        name: "Abc",
                        surname: "Abc",
                        position: "Abc",
                        location: "Abc",
                        email: "Abc",
                        token: "Abc",
                        hireDate: new Date("2021-01-01T20:00:00.000Z"),
                        imageId: null,
                        journeyCount: 0,
                    },
                    notificationData: `{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`,
                    notificationId: 0,
                }}
                notificationHeaderMessage="Header message"
                notificationHeaderTittle="Header Title"
                notificationTittle="Tittle"
                withWithdraw
            />
        )
    ).toMatchInlineSnapshot(`
    <React.Fragment>
      <MinimizedNotification
        notificationId={0}
        notificationTitle="Tittle"
        openModal={[Function]}
        user={
          Object {
            "email": "Abc",
            "hireDate": 2021-01-01T20:00:00.000Z,
            "id": 0,
            "imageId": null,
            "journeyCount": 0,
            "location": "Abc",
            "name": "Abc",
            "position": "Abc",
            "surname": "Abc",
            "token": "Abc",
          }
        }
      />
      <NotificationModalBase
        styles={
          Array [
            Object {
              "height": "85%",
            },
          ]
        }
      >
        <NotificationHeader
          disableModal={[Function]}
          message="Header message"
          sender={
            Object {
              "email": "Abc",
              "hireDate": 2021-01-01T20:00:00.000Z,
              "id": 0,
              "imageId": null,
              "journeyCount": 0,
              "location": "Abc",
              "name": "Abc",
              "position": "Abc",
              "surname": "Abc",
              "token": "Abc",
            }
          }
          title="Header Title"
          withoutSnooze={true}
        />
        <NotificationRideDetails
          withBaggage="true"
        />
        <NotificationRideStops
          stopsOwner={null}
          title="Your route"
        />
        <NotificationButtonGroup>
          <NotificationConfirmButton
            onConfirm={[Function]}
          />
          <NotificationDeclineButton
            declineText="Withdraw"
            onDecline={[Function]}
          />
        </NotificationButtonGroup>
      </NotificationModalBase>
      <ConfirmModal
        cancelText="No, keep it"
        confirmText="Yes, withdraw"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="Are you sure you want to withdraw the appoved request?"
        title="ARE YOU SURE?"
        visible={false}
      />
    </React.Fragment>
  `));
