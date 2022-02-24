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
                    journeyId: 1,
                    notificationData: `{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`,
                    notificationId: 0,
                }}
                notificationHeaderMessage="Header message"
                notificationHeaderTittle="Header Title"
                notificationTittle="Tittle"
                journeyUserId={1}
                withWithdraw
                IsAvailableSeatsVisible
                IsBaggageVisible
                IsDepartureTimeVisible
                IsDetailsTitleVisible
                IsFeeVisible
                IsStopsTitleVisible
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
    </React.Fragment>
  `));
