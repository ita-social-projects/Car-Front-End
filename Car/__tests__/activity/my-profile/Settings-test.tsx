import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Settings from "../../../src/activity/my-profile/my-profile-activity/settings/Settings";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", async () =>
  expect(renderer.render(<Settings navigation={undefined} />))
    .toMatchInlineSnapshot(`
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
            <TouchableOpacity
              activeOpacity={1}
              onPress={[Function]}
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
                    "borderColor": "#AAA9AE",
                  },
                ]
              }
            >
              <ForwardRef(AnimatedComponentWrapper)
                style={false}
              >
                <AvatarLogoTitle />
              </ForwardRef(AnimatedComponentWrapper)>
            </TouchableOpacity>
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
                      "color": "#0B171B",
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
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                Chats Settings
              </Text>
            </TouchableNavigationCard>
            <View
              style={
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                  "fontSize": 13,
                  "lineHeight": 16,
                  "marginLeft": 16,
                  "marginTop": 24,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "flex": 1,
                      "fontWeight": "bold",
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                App theme
              </Text>
              <View
                style={
                  Array [
                    Object {
                      "borderWidth": 1,
                      "flexDirection": "row",
                      "marginRight": 15,
                    },
                    Object {
                      "borderColor": "#0B171B",
                    },
                  ]
                }
              >
                <TouchableOpacity
                  onPress={[Function]}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "#000000",
                        "flexDirection": "row",
                        "justifyContent": "flex-end",
                        "paddingHorizontal": 16,
                        "paddingVertical": 6,
                      },
                      Object {
                        "backgroundColor": "#0B171B",
                        "borderColor": "#0B171B",
                        "color": "#FFFFFF",
                      },
                    ]
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "lineHeight": 18,
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#0B171B",
                          "borderColor": "#0B171B",
                          "color": "#FFFFFF",
                        },
                      ]
                    }
                  >
                    Light
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={[Function]}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "#000000",
                        "borderLeftWidth": 1,
                        "borderRightWidth": 1,
                        "flexDirection": "row",
                        "justifyContent": "flex-end",
                        "paddingHorizontal": 16,
                        "paddingVertical": 6,
                      },
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "lineHeight": 18,
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#FFFFFF",
                          "borderColor": "#0B171B",
                          "color": "#0B171B",
                        },
                      ]
                    }
                  >
                    Dark
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={[Function]}
                  style={
                    Array [
                      Object {
                        "alignItems": "center",
                        "backgroundColor": "white",
                        "flexDirection": "row",
                        "justifyContent": "flex-end",
                        "paddingHorizontal": 16,
                        "paddingVertical": 6,
                      },
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#0B171B",
                        "color": "#0B171B",
                      },
                    ]
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "lineHeight": 18,
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#FFFFFF",
                          "borderColor": "#0B171B",
                          "color": "#0B171B",
                        },
                      ]
                    }
                  >
                    As system
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ForwardRef(AnimatedComponentWrapper)
            style={false}
          />
        </View>
      </ScrollView>
      <BottomPopup
        enabledInnerScrolling={false}
        initialSnap={1}
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
            <TouchableOpacity
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
                      "fontFamily": "Open Sans Bold",
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 16,
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                Add photo
              </Text>
            </TouchableOpacity>
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
                    "fontFamily": "Proxima Nova Extrabold",
                    "fontSize": 14,
                    "lineHeight": 16,
                    "paddingBottom": 33,
                    "paddingLeft": 24,
                    "textTransform": "uppercase",
                  },
                  Object {
                    "color": "#0B171B",
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
            143,
            0,
          ]
        }
      />
      <ConfirmModal
        cancelText="No, keep it"
        confirmText="Yes, delete it"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="Are you sure you want to delete your profile photo?"
        title="ARE YOU SURE?"
        visible={false}
      />
    </React.Fragment>
  `));
