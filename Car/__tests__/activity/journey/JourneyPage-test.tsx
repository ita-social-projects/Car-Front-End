import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyPage from "../../../src/activity/journey/journey-activity/journey-page/JourneyPage";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(
        renderer.render(
            <JourneyPage props={{ route: { params: { journeyId: 1 } } }} />
        )
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
        initialSnap={0}
        renderContent={[Function]}
        renderHeader={[Function]}
        snapPoints={
          Array [
            691,
            282,
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
