import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AppTabs from "../../src/components/navigation/app-tabs/AppTabs";

const renderer = shallowRender.createRenderer();

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
          "activeTintColor": "#ffffff",
          "inactiveBackgroundColor": "#ffffff",
          "inactiveTintColor": "#414045",
          "labelStyle": Object {
            "fontFamily": "Open Sans",
            "fontSize": 10,
            "fontStyle": "normal",
            "fontWeight": "800",
            "lineHeight": 16,
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
              "color": "#ffffff",
            },
            "tabBarLabel": "Notifications",
          }
        }
      />
    </BottomTabNavigator>
  `));
