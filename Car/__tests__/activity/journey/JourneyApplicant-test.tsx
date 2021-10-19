import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyApplicant from "../../../src/activity/journey/journey-activity/journey-applicant/JourneyApplicant";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(
        renderer.render(<JourneyApplicant route={{ params: { userId: 1 } }} />)
    ).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingHorizontal": 23,
            "paddingTop": 22.5,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <Indicator
        color="#414045"
        size="large"
        text="Loading information..."
      />
      <ConfirmModal
        cancelText="Copy number"
        confirmColor="#D80056"
        confirmText="Call undefined"
        disableModal={[Function]}
        hideCancelButton={false}
        onConfirm={[Function]}
        title="undefined undefined"
        visible={false}
      />
    </View>
  `));
