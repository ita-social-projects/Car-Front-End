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
          "activeTintColor": "black",
          "inactiveTintColor": "#AAA9AE",
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
        options={
          Object {
            "tabBarLabel": "My Profile",
          }
        }
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
            "tabBarLabel": "Notifications",
          }
        }
      />
    </BottomTabNavigator>
  `));
