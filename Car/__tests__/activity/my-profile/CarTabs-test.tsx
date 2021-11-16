import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CarTabs from "../../../src/activity/my-profile/my-profile-activity/cars/car-tabs/CarTabs";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CarTabs />)).toMatchInlineSnapshot(`
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
          name="Cars"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "My Cars",
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
          name="AddCars"
          options={
            Object {
              "headerLeft": [Function],
              "headerTitle": "Add a Car",
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
          name="EditCars"
          options={
            Object {
              "headerLeft": [Function],
              "headerRight": [Function],
              "headerTitle": "Edit Car Info",
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
