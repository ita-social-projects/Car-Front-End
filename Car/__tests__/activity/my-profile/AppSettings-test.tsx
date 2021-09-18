import React from "react";
import renderer from "react-test-renderer";
import AppSettings from "../../../src/activity/my-profile/my-profile-activity/settings/settings-activity/app-settings/AppSettings";

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", async () =>
    expect(renderer.create(<AppSettings />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingHorizontal": 16,
            "paddingTop": 50,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
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
              Array [
                Object {
                  "fontFamily": "Open Sans",
                  "fontSize": 13,
                  "fontWeight": "700",
                  "lineHeight": 16,
                },
                Object {
                  "color": "black",
                },
              ]
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
            onTintColor="#414045"
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
            thumbTintColor="white"
            tintColor="gray"
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
              Array [
                Object {
                  "fontFamily": "Open Sans",
                  "fontSize": 16,
                  "lineHeight": 24,
                },
                Object {
                  "color": "black",
                },
              ]
            }
          >
            No
          </Text>
        </View>
      </View>
    </View>
  `));
