import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Chat from "../../../src/activity/messages/messages-activity/chat/Chat";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-localize", () => {
    return {
        getTimeZone: jest.fn(),
    };
});

test("renders correctly", async () =>
    expect(
        renderer.render(
            <Chat route={undefined as any} navigation={undefined as any} />
        )
    ).toMatchInlineSnapshot(`
    <KeyboardAvoidingView
      behavior="padding"
      enabled={true}
      keyboardVerticalOffset={0}
      style={
        Array [
          Object {
            "flex": 1,
            "paddingBottom": 5,
            "paddingHorizontal": 5,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <TouchableWithoutFeedback
        onPress={[Function]}
      >
        <Indicator
          color="#414045"
          size="large"
          text="Loading information..."
        />
      </TouchableWithoutFeedback>
      <BottomPopup
        enabledInnerScrolling={false}
        initialSnap={1}
        refForChild={[Function]}
        renderContent={
          <View
            style={
              Array [
                Object {
                  "width": 750,
                },
              ]
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
        snapPoints={
          Array [
            135,
            -340,
          ]
        }
      />
    </KeyboardAvoidingView>
  `));
