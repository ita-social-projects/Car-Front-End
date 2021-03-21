import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import MessagesTabs from "../../../src/activity/messages/messages-tabs/MessagesTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<MessagesTabs />)).toMatchInlineSnapshot(`
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
          name="Messages"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
              "headerTitle": "Messages",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "black",
                },
              ],
            }
          }
        >
          [Function]
        </Screen>
        <Screen
          component={[Function]}
          name="Chat"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
              "headerTitle": "Chat",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "black",
                },
              ],
            }
          }
        />
        <Screen
          component={[Function]}
          name="Applicant Page"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "black",
                },
              ],
              "title": "SoftServian",
            }
          }
        />
      </StackNavigator>
    </View>
  `));
