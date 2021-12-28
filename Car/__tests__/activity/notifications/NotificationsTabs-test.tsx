import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import NotificationsTabs from "../../../src/activity/notifications/notifications-tabs/NotificationsTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<NotificationsTabs />)).toMatchInlineSnapshot(`
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
          name="Notifications"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Notifications",
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
          name="Route View"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "View Stops",
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
          name="Stop View"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "View Stops",
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
          name="New Applicant"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "",
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
          name="Ride is Canceled"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "",
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
          name="Withdrawal"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "",
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
          name="Invitation"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "",
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
          name="Invitation is Accepted"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "",
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
      </StackNavigator>
    </View>
  `));
