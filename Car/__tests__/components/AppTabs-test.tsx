import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AppTabs from "../../src/components/navigation/app-tabs/AppTabs";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-localize", () => {
    return {
        getTimeZone: jest.fn(),
    };
});

test("renders correctly", async () =>
    expect(renderer.render(<AppTabs />)).toMatchInlineSnapshot(`
    <BottomTabNavigator
      initialRouteName="JourneyTabs"
      sceneContainerStyle={
        Object {
          "alignItems": "center",
        }
      }
      screenOptions={[Function]}
      tabBarOptions={
        Object {
          "activeBackgroundColor": "#414045",
          "activeTintColor": "#FFFFFF",
          "inactiveBackgroundColor": "#FFFFFF",
          "inactiveTintColor": "#AAA9AE",
          "labelStyle": Object {
            "fontFamily": "Open Sans Bold",
            "fontSize": 10,
            "fontStyle": "normal",
            "fontWeight": "bold",
            "lineHeight": 12,
          },
        }
      }
    >
      <Screen
        component={[Function]}
        name="MessagesTabs"
        options={[Function]}
      />
      <Screen
        component={[Function]}
        name="MyProfileTabs"
        options={[Function]}
      />
      <Screen
        component={[Function]}
        name="JourneyTabs"
        options={[Function]}
      />
      <Screen
        component={[Function]}
        name="NotificationsTabs"
        options={
          Object {
            "tabBarBadge": undefined,
            "tabBarBadgeStyle": Object {
              "backgroundColor": "#EC6400",
              "color": "#FFFFFF",
              "fontSize": 8,
            },
            "tabBarLabel": "Notifications",
          }
        }
      />
    </BottomTabNavigator>
  `));
