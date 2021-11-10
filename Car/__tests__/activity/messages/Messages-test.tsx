import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Messages from "../../../src/activity/messages/Messages";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("react-native-localize", () => {
  return {
    getTimeZone: jest.fn(),
  };
});

test("renders correctly", async () =>
  expect(
    renderer.render(
      <Messages
        isOpenFilter={false}
        component={undefined}
        navigation={undefined as any}
      />
    )
  ).toMatchInlineSnapshot(`
    <ForwardRef(SafeAreaView)
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <View />
      <View
        style={
          Array [
            Object {
              "flex": 1,
              "padding": 15,
            },
            Object {
              "backgroundColor": "#FFFFFF",
            },
          ]
        }
      >
        <View>
          <FlatList
            data={Array []}
            keyExtractor={[Function]}
            renderItem={[Function]}
          />
          <React.Fragment>
            <View
              style={
                Object {
                  "flex": 100,
                  "marginTop": 20,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#0B171B",
                    "fontFamily": "Milliard Bold",
                    "fontSize": 16,
                    "textAlign": "center",
                  }
                }
              >
                CURRENTLY YOU DO NOT HAVE ANY
                

                CHATS
              </Text>
              <Image
                source={
                  Object {
                    "testUri": "../../../assets/images/chat/no-chats.png",
                  }
                }
                style={
                  Object {
                    "height": 225,
                    "marginTop": 45,
                    "resizeMode": "stretch",
                    "width": 396,
                  }
                }
              />
            </View>
          </React.Fragment>
        </View>
      </View>
    </ForwardRef(SafeAreaView)>
  `));
