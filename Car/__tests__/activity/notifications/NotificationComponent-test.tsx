import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import NotificationComponent from "../../../src/activity/notifications/NotificationComponent";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<NotificationComponent item={{ type: 1 }} />))
        .toMatchInlineSnapshot(`
    <View>
      <JourneyNewApplicant
        date={Date { NaN }}
        visible={false}
      />
    </View>
  `));
