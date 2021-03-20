import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyRequestPage from "../../../src/activity/journey/journey-activity/journey-request-page/JourneyRequestPage";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler");
jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", () =>
    expect(
        renderer.render(<JourneyRequestPage route={{ params: { journeyId: 1 } }} />)
    ).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
          "backgroundColor": "#88FF88",
          "flex": 1,
        }
      }
    >
      <Text
        style={
          Object {
            "color": "#000000",
            "fontFamily": "Proxima Nova",
          }
        }
      >
        Map implementation is in progress
      </Text>
      <BottomPopup
        enabledInnerScrolling={false}
        initialSnap={1}
        refForChild={
          Object {
            "current": null,
          }
        }
        renderContent={
          <View
            style={
              Object {
                "backgroundColor": "white",
                "height": 400,
              }
            }
          >
            <View
              style={
                Object {
                  "alignItems": "center",
                  "backgroundColor": "#FFFFFF",
                  "height": 300,
                  "justifyContent": "center",
                }
              }
            >
              <Indicator
                color="#414045"
                size="large"
                text="Loading information..."
              />
            </View>
          </View>
        }
        renderHeader={<React.Fragment />}
        snapPoints={
          Array [
            385,
            0,
          ]
        }
        style={
          Object {
            "backgroundColor": "white",
          }
        }
      />
    </View>
  `));
