import React from "react";
import renderer from "react-test-renderer";
import AppSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/app-settings/AppSettings";

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", () =>
    expect(renderer.create(<AppSettings />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#FFFFFF",
          "flex": 1,
          "paddingHorizontal": 16,
          "paddingTop": 50,
        }
      }
    >
      <View
        style={
          Object {
            "alignItems": "center",
            "flexDirection": "row",
          }
        }
      >
        <View
          style={
            Object {
              "flex": 1,
            }
          }
        >
          <Text
            style={
              Object {
                "fontFamily": "Open Sans",
                "fontSize": 13,
                "fontWeight": "700",
                "lineHeight": 16,
              }
            }
          >
            Enable Dark Mode
          </Text>
        </View>
        <View
          style={
            Object {
              "paddingRight": 20,
            }
          }
        >
          <RCTSwitch
            accessibilityRole="switch"
            onChange={[Function]}
            onResponderTerminationRequest={[Function]}
            onStartShouldSetResponder={[Function]}
            style={
              Array [
                Object {
                  "height": 31,
                  "width": 51,
                },
                Object {
                  "height": 28,
                  "width": 36,
                },
              ]
            }
            value={false}
          />
        </View>
        <View
          style={
            Object {
              "width": 26,
            }
          }
        >
          <Text
            style={
              Object {
                "fontFamily": "Open Sans",
                "fontSize": 16,
                "lineHeight": 24,
              }
            }
          >
            No
          </Text>
        </View>
      </View>
    </View>
  `));
