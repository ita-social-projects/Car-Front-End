import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import AddressBookTabs from "../../../src/activity/my-profile/my-profile-activity/address-book/address-book-tabs/AddressBookTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<AddressBookTabs />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignSelf": "stretch",
          "flex": 1,
        }
      }
    >
      <StackNavigator>
        <Screen
          component={[Function]}
          name="AddressBook"
          options={
            Object {
              "headerLeft": [Function],
              "headerStyle": Array [
                Object {},
                Object {
                  "borderBottomColor": "#AAA9AE",
                },
              ],
              "headerTitle": "Address Book",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
                },
              ],
            }
          }
        />
        <Screen
          component={[Function]}
          name="AddLocation"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Address Book",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
                },
              ],
            }
          }
        />
        <Screen
          name="EditLocation"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
              "headerTitle": "Edit Address",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
                },
              ],
            }
          }
        >
          [Function]
        </Screen>
      </StackNavigator>
    </View>
  `));
