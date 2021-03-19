import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Settings from "../../../src/activity/my-profile/my-profile-activity/settings/Settings";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<Settings />)).toMatchInlineSnapshot(`
    <React.Fragment>
      <ScrollView
        refreshControl={
          <RefreshControlMock
            onRefresh={[Function]}
            refreshing={false}
          />
        }
        style={
          Object {
            "backgroundColor": "#FFFFFF",
            "flex": 1,
          }
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
                Object {
                  "backgroundColor": "#FFFFFF",
                  "borderColor": "#F0F0F0",
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
                }
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
                  Object {
                    "color": "#000000",
                    "fontWeight": "bold",
                  }
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
                  Object {
                    "color": "#000000",
                    "fontWeight": "bold",
                  }
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
                  Object {
                    "color": "#000000",
                    "fontWeight": "bold",
                  }
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
        enabledInnerScrolling={false}
        initialSnap={0}
        onCloseEnd={[Function]}
        refForChild={
          Object {
            "current": null,
          }
        }
        renderContent={[Function]}
        renderHeader={[Function]}
        snapPoints={
          Array [
            0,
            143,
          ]
        }
      />
    </React.Fragment>
  `));
