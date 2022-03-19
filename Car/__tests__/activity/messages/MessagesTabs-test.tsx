import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import MessagesTabs from "../../../src/activity/messages/messages-tabs/MessagesTabs";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-localize", () => {
    return {
        getTimeZone: jest.fn(),
    };
});

test("renders correctly", async () =>
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
              "headerTitle": "Chats",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
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
        <Screen
          component={[Function]}
          name="Chat"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Chat",
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
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
          name="Applicant Page"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitleAlign": "center",
              "headerTitleStyle": Array [
                Object {
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                },
                Object {
                  "color": "#0B171B",
                },
              ],
              "title": "SoftServian",
            }
          }
        />
      </StackNavigator>
    </View>
  `));
