import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Chat from "../../../src/activity/messages/messages-activity/chat/Chat";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<Chat />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "white",
          "flex": 1,
          "paddingBottom": 18,
        }
      }
    >
      <Indicator
        color="#414045"
        size="large"
        text="Loading information..."
      />
    </View>
  `));
