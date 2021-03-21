import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AddressBook from "../../../src/activity/my-profile/my-profile-activity/address-book/AddressBook";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<AddressBook />)).toMatchInlineSnapshot(`
    <ScrollView
      contentContainerStyle={
        Object {
          "flex": 1,
        }
      }
      style={
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
      }
    >
      <View
        style={
          Array [
            Object {
              "alignSelf": "stretch",
              "justifyContent": "center",
              "padding": 8,
            },
            Object {
              "flex": 1,
            },
          ]
        }
      >
        <ActivityIndicator
          animating={true}
          color="black"
          hidesWhenStopped={true}
          size={40}
        />
      </View>
    </ScrollView>
  `));
