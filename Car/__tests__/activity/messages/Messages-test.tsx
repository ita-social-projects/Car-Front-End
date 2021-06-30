import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import Messages from "../../../src/activity/messages/Messages";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

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
              "backgroundColor": "white",
            },
          ]
        }
      >
        <View>
          <FlatList
            data={Array []}
            disableVirtualization={false}
            horizontal={false}
            initialNumToRender={10}
            keyExtractor={[Function]}
            maxToRenderPerBatch={10}
            numColumns={1}
            onEndReachedThreshold={2}
            removeClippedSubviews={false}
            renderItem={[Function]}
            scrollEventThrottle={50}
            updateCellsBatchingPeriod={50}
            windowSize={21}
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
                    "fontFamily": "Milliard",
                    "fontSize": 16,
                    "fontWeight": "bold",
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
