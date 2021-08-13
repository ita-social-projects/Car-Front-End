import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyNewApplicantView from "../../src/components/journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantView";

const renderer = shallowRender.createRenderer();

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
                            },
                            notificationData: `{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`,
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
                    "position": "Abc",
                    "surname": "Abc",
                    "token": "Abc",
                  }
                }
              />
            </View>
          </View>
          <View>
            <RequestComment
              comments="Abc"
            />
          </View>
          <WithLuggage
            hasLuggage="true"
          />
          <Text>
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
