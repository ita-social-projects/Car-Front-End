import React from "react";
import NewNotification from "../../src/components/new-notification/NewNotification";
import shallowRender from "react-test-renderer/shallow";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <NewNotification
                user={{
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
                notificationId={0}
                openModal={() => {}}
                read={true}
            />
        )
    ).toMatchInlineSnapshot(`
    <ForwardRef
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
                "borderBottomColor": "#C1C1C5",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </ForwardRef>
  `));

test("renders correctly", async () =>
    expect(
        renderer.render(
            <NewNotification
                user={{
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
                notificationId={0}
                openModal={() => {}}
            />
        )
    ).toMatchInlineSnapshot(`
    <ForwardRef
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
                      "color": "#02a2cf",
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
                "borderBottomColor": "#02a2cf",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </ForwardRef>
  `));
