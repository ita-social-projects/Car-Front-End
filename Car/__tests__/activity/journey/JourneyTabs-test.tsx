import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyTabs from "../../../src/activity/journey/journey-tabs/JourneyTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<JourneyTabs />)).toMatchInlineSnapshot(`
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
          name="Journey"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Journey",
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
          name="Create Journey"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Create a Journey",
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
          name="Search Journey"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Search for a Journey",
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
          name="Journey Page"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
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
              "title": "Journey",
            }
          }
        >
          [Function]
        </Screen>
        <Screen
          component={[Function]}
          name="Journey Request Page"
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
              "title": "Confirm Journey",
            }
          }
        />
        <Screen
          component={[Function]}
          name="OK Search Result"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
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
              "title": "Search result",
            }
          }
        />
        <Screen
          component={[Function]}
          name="Bad Search Result"
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
              "title": "Search result",
            }
          }
        />
        <Screen
          component={[Function]}
          name="Search"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
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
              "title": "Search Journey",
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
      </StackNavigator>
    </View>
  `));
