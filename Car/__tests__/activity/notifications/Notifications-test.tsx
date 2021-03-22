import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Notifications from "../../../src/activity/notifications/Notifications";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<Notifications />)).toMatchInlineSnapshot(`
    <ForwardRef
      data={Array []}
      keyExtractor={[Function]}
      renderItem={[Function]}
      style={
        Array [
          Object {
            "alignSelf": "stretch",
            "flex": 100,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    />
  `));
