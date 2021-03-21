import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Chat from "../../../src/activity/messages/messages-activity/chat/Chat";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<Chat />)).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingBottom": 18,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
      }
    >
      <Indicator
        color="#414045"
        size="large"
        text="Loading information..."
      />
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
              }
            }
          >
            <MenuButton
              onPress={[Function]}
              text="Copy text"
            />
            <MenuButton
              onPress={[Function]}
              text="Cancel"
            />
          </View>
        }
        renderHeader={<View />}
        snapPoints={
          Array [
            118,
            0,
          ]
        }
      />
    </View>
  `));
