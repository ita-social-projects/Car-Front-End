import React from "react";
import MinimizedNotification from "../../src/components/minimized-notification/MinimizedNotification";
import shallowRender from "react-test-renderer/shallow";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <MinimizedNotification
                user={{
                    id: 0,
                    name: "Abc",
                    surname: "Abc",
                    position: "Abc",
                    location: "Abc",
                    email: "Abc",
<<<<<<< HEAD
=======
                    token: "Abc",
>>>>>>> ce176802f (tests update)
                    fcmtoken: null,
                    hireDate: new Date("2021-01-01T20:00:00.000Z"),
                    imageId: null,
                    journeyCount: 0,
                    phoneNumber: null,
                }}
                notificationId={0}
                openModal={() => {}}
                read={true}
            />
        )
    ).toMatchInlineSnapshot(`
    <TouchableOpacity
      onPress={[Function]}
    >
      <View
        style={null}
      >
        <View
          style={
            Array [
              undefined,
              undefined,
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
                undefined,
              ]
            }
          >
            <View>
              <AvatarLogo
                size={38.5}
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
                    "phoneNumber": null,
                    "position": "Abc",
                    "surname": "Abc",
                  }
                }
              />
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                Abc Abc
              </Text>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              />
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                a few seconds
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              undefined,
              Object {
                "backgroundColor": "rgba(0,0,0,0)",
                "borderBottomColor": "#AAA9AE",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </TouchableOpacity>
  `));

test("renders correctly", async () =>
    expect(
        renderer.render(
            <MinimizedNotification
                user={{
                    id: 0,
                    name: "Abc",
                    surname: "Abc",
                    position: "Abc",
                    location: "Abc",
                    email: "Abc",
<<<<<<< HEAD
=======
                    token: "Abc",
>>>>>>> ce176802f (tests update)
                    fcmtoken: null,
                    hireDate: new Date("2021-01-01T20:00:00.000Z"),
                    imageId: null,
                    journeyCount: 0,
                    phoneNumber: null,
                }}
                notificationId={0}
                openModal={() => {}}
            />
        )
    ).toMatchInlineSnapshot(`
    <TouchableOpacity
      onPress={[Function]}
    >
      <View
        style={
          Object {
            "backgroundColor": "rgba(0,161,206,0.1)",
          }
        }
      >
        <View
          style={
            Array [
              undefined,
              undefined,
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
                undefined,
              ]
            }
          >
            <View>
              <AvatarLogo
                size={38.5}
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
                    "phoneNumber": null,
                    "position": "Abc",
                    "surname": "Abc",
                  }
                }
              />
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                Abc Abc
              </Text>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              />
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                a few seconds
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              undefined,
              Object {
                "backgroundColor": "rgba(0,0,0,0)",
                "borderBottomColor": "#02A2CF",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </TouchableOpacity>
  `));
