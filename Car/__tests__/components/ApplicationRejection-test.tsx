import React from "react";
import shallowRender from "react-test-renderer/shallow";
import ApplicationRejection from "../../src/components/notifications/notifications-types/ApplicationRejection";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <ApplicationRejection
                sender={{
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
                }}
                notificationData={`{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`}
                notificationId={0}
            />
        )
    ).toMatchInlineSnapshot(`
    <React.Fragment>
      <MinimizedNotification
        notificationId={0}
        notificationTitle="Driver declined your request!"
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
          message="The driver has declined your request!"
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
          title="REQUEST IS DECLINED"
          withoutSnooze={true}
        />
        <NotificationRideDetails />
        <NotificationRideStops
          stopsOwner={null}
          title="Your route"
        />
        <NotificationButtonGroup>
          <NotificationConfirmButton
            onConfirm={[Function]}
          />
        </NotificationButtonGroup>
      </NotificationModalBase>
    </React.Fragment>
  `));
