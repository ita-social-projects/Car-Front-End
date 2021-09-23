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
                    fcmtoken: null,
                    hireDate: new Date("2021-01-01T20:00:00.000Z"),
                    imageId: null,
                    journeyCount: 0,
                    phoneNumber: null,
                }}
                notificationData={`{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`}
                notificationId={0}
                journeyId={0}
            />
        )
    ).toMatchInlineSnapshot(`
    <ApplicationAnswer
      IsBaggageVisible={false}
      IsDetailsTitleVisible={false}
      IsFeeVisible={false}
      notification={
        Object {
          "journeyId": 0,
          "notificationData": "{\\"title\\": \\"New Applicant\\", \\"comments\\": \\"Abc\\", \\"hasLuggage\\": \\"true\\"}",
          "notificationId": 0,
          "sender": Object {
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
          },
        }
      }
      notificationHeaderMessage="The driver has rejected your request!"
      notificationHeaderTittle="REQUEST IS REJECTED"
      notificationTittle="Driver rejected your request!"
    />
  `));
