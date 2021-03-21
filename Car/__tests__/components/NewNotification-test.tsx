import React from "react";
import NewNotification from "../../src/components/new-notification/NewNotification";
import shallowRender from "react-test-renderer/shallow";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(
            <NewNotification
                user={{ name: "Abc", surname: "Abc", position: "Abc" }}
            />
        )
    ).toMatchInlineSnapshot(`
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
                  "name": "Abc",
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
  `));
