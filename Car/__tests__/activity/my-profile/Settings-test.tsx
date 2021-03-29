import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Settings from "../../../src/activity/my-profile/my-profile-activity/settings/Settings";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", async () =>
    expect(renderer.render(<Settings navigation={undefined}/>)).toMatchInlineSnapshot(`
    <React.Fragment>
      <ScrollView
        refreshControl={
          <RefreshControlMock
            onRefresh={[Function]}
            refreshing={false}
          />
        }
        style={
          Array [
            Object {
              "flex": 1,
            },
            Object {
              "backgroundColor": "#FFFFFF",
            },
          ]
        }
      >
        <View
          style={
            Object {
              "height": 1164,
              "width": 750,
            }
          }
        >
          <View
            style={
              Object {
                "paddingTop": 166,
              }
            }
          >
            <ForwardRef
              activeOpacity={1}
              onLongPress={[Function]}
              style={
                Array [
                  Object {
                    "borderRadius": 16,
                    "borderWidth": 1,
                    "height": 126,
                    "left": 0,
                    "marginHorizontal": 14,
                    "marginVertical": 20,
                    "paddingTop": 10,
                    "position": "absolute",
                    "top": 0,
                    "width": 722,
                    "zIndex": 100,
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                    "borderColor": "#F0F0F0",
                  },
                ]
              }
            >
              <AvatarLogoTitle />
            </ForwardRef>
            <TouchableNavigationCard
              angle="0"
              cardName="App Settings"
              navigationName="AppSettings"
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontWeight": "bold",
                    },
                    Object {
                      "color": "#000000",
                    },
                  ]
                }
              >
                App Settings
              </Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
              angle="0"
              cardName="Notifications Settings"
              navigationName="NotificationSettings"
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontWeight": "bold",
                    },
                    Object {
                      "color": "#000000",
                    },
                  ]
                }
              >
                Notifications Settings
              </Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
              angle="0"
              cardName="Chats Settings"
              navigationName="ChatSettings"
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontWeight": "bold",
                    },
                    Object {
                      "color": "#000000",
                    },
                  ]
                }
              >
                Chats Settings
              </Text>
            </TouchableNavigationCard>
          </View>
          <ForwardRef(AnimatedComponentWrapper)
            style={false}
          />
        </View>
      </ScrollView>
      <BottomPopup
        enabledGestureInteraction={true}
        enabledInnerScrolling={false}
        initialSnap={0}
        onCloseEnd={[Function]}
        refForChild={
          Object {
            "current": null,
          }
        }
        renderContent={
          <View
            style={
              Object {
                "backgroundColor": "#FFFFFF",
              }
            }
          >
            <ForwardRef
              onPress={[Function]}
              style={
                Object {
                  "alignItems": "flex-start",
                  "height": 44,
                  "justifyContent": "center",
                  "paddingLeft": 24,
                  "width": 750,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": "Open Sans",
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    },
                    Object {
                      "color": "black",
                    },
                  ]
                }
              >
                Upload Avatar
              </Text>
            </ForwardRef>
          </View>
        }
        renderHeader={
          <View
            style={
              Object {
                "backgroundColor": "#FFFFFF",
              }
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova",
                    "fontSize": 14,
                    "lineHeight": 16,
                    "paddingBottom": 33,
                    "paddingLeft": 24,
                    "textTransform": "uppercase",
                  },
                  Object {
                    "color": "black",
                  },
                ]
              }
            >
              Edit Profile
            </Text>
          </View>
        }
        snapPoints={
          Array [
            0,
            143,
          ]
        }
      />
    </React.Fragment>
  `));
