import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Chat from "../../../src/activity/messages/messages-activity/chat/Chat";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(
        <Chat route={undefined as any} navigation={undefined as any}/>))
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
            "paddingBottom": 5,
            "paddingHorizontal": 5,
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
        enabledGestureInteraction={false}
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
            135,
            0,
          ]
        }
      />
    </View>
  `));
