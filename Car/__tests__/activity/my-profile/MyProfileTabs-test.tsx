import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import MyProfileTabs from "../../../src/activity/my-profile/my-profile-tabs/MyProfileTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<MyProfileTabs />)).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignSelf": "stretch",
            "flex": 1,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <StackNavigator>
        <Screen
          component={[Function]}
          name="MyProfile"
          options={
            Object {
              "headerLeft": [Function],
              "headerStyle": Array [
                Object {
                  "borderBottomWidth": 0,
                  "elevation": 0,
                  "height": 144,
                },
                Object {
                  "borderBottomColor": "#AAA9AE",
                },
              ],
              "headerTitle": "",
            }
          }
        />
        <Screen
          component={[Function]}
          name="Preferences"
          options={
            Object {
              "headerLeft": [Function],
              "headerStyle": Array [
                Object {},
                Object {
                  "borderBottomColor": "#AAA9AE",
                },
              ],
              "headerTitle": "Preferences",
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
          name="Details"
          options={
            Object {
              "headerLeft": [Function],
              "headerStyle": Array [
                Object {},
                Object {
                  "borderBottomColor": "#AAA9AE",
                },
              ],
              "headerTitle": "Details",
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
          name="CarTabs"
          options={
            Object {
              "headerShown": false,
            }
          }
        />
        <Screen
          component={[Function]}
          name="AddressBookTabs"
          options={
            Object {
              "headerShown": false,
            }
          }
        />
        <Screen
          component={[Function]}
          name="SettingsTabs"
          options={
            Object {
              "headerShown": false,
            }
          }
        />
        <Screen
          component={[Function]}
          name="Badges"
          options={
            Object {
              "headerShown": false,
            }
          }
        />
      </StackNavigator>
    </View>
  `));
