import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyTabs from "../../../src/activity/journey/journey-tabs/JourneyTabs";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-localize", () => {
    return {
        getTimeZone: jest.fn(),
    };
});

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
              "headerTitle": "Ride",
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
          name="Create Journey"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
              "headerTitle": "Add a Ride",
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
        <Screen
          component={[Function]}
          name="Address Input"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Input Address",
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
          name="Journey Details"
          options={[Function]}
        >
          [Function]
        </Screen>
        <Screen
          component={[Function]}
          name="Journey Invitations"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Ride Invitations",
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
          name="Search Journey"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Find a Ride",
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
          name="Journey Page"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
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
              "title": "Ride",
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
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
                },
              ],
              "title": "Create Ride Request",
            }
          }
        />
        <Screen
          name="OK Search Result"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
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
              "title": "Search Results",
            }
          }
        >
          [Function]
        </Screen>
        <Screen
          component={[Function]}
          name="Bad Search Result"
          options={
            Object {
              "headerLeft": [Function],
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
              "title": "Search Results",
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
                  "fontFamily": "Open Sans ExtraBold",
                  "fontSize": 18,
                  "fontWeight": "700",
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
                },
              ],
              "title": "Search Ride",
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
                  "marginLeft": 20,
                },
                Object {
                  "color": "#0B171B",
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
              "headerTitle": "Chat",
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
          name="Preferences"
          options={
            Object {
              "headerLeft": [Function],
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
      </StackNavigator>
    </View>
  `));
