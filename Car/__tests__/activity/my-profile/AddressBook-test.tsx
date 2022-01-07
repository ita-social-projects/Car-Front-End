import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AddressBook from "../../../src/activity/my-profile/my-profile-activity/address-book/AddressBook";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
  expect(renderer.render(<AddressBook navigation={undefined} />))
    .toMatchInlineSnapshot(`
    <ScrollView
      contentContainerStyle={
        Object {
          "flex": 1,
        }
      }
      refreshControl={
        <RefreshControlMock
          onRefresh={[Function]}
          refreshing={false}
        />
      }
      style={
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "#FFFFFF",
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
          color="#0B171B"
          size={40}
        />
      </View>
    </ScrollView>
  `));
