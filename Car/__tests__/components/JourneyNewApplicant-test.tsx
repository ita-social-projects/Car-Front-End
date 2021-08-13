import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyNewApplicant from "../../src/components/journey-new-applicant/JourneyNewApplicant";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <JourneyNewApplicant
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
                }}
                notificationData={`{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`}
                notificationId={0}
            />
        )
    ).toMatchInlineSnapshot(`
    <React.Fragment>
      <MinimizedNotification
        notificationId={0}
        notificationTitle="New applicant"
        openModal={[Function]}
        user={
          Object {
            "email": "Abc",
            "fcmtoken": null,
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
    </React.Fragment>
  `));
