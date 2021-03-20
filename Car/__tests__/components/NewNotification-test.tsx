import React from "react";
import NewNotification from "../../src/components/new-notification/NewNotification";
import shallowRender from "react-test-renderer/shallow";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(
        renderer.render(
            <NewNotification
                user={{ name: "Abc", surname: "Abc", position: "Abc" }}
            />
        )
    ).toMatchInlineSnapshot(`
    <View>
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
            <Text>
              Abc Abc
            </Text>
            <Text />
          </View>
          <View>
            <Text>
              a few seconds
            </Text>
          </View>
        </View>
      </View>
      <View />
    </View>
  `));
