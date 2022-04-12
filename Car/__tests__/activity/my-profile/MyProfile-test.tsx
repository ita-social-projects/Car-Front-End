import React from "react";
import MyProfile from "../../../src/activity/my-profile/MyProfile";
import shallowRender from "react-test-renderer/shallow";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", async () =>
    expect(renderer.render(<MyProfile navigation={undefined} />))
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignSelf": "stretch",
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
          Array [
            Object {
              "borderBottomWidth": 2,
              "height": 57,
              "width": "100%",
            },
            Object {
              "borderColor": "#F8F8F8",
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
                "paddingTop": 16,
                "textAlign": "center",
              },
              Object {
                "color": "#0B171B",
              },
            ]
          }
        >
          My Profile
        </Text>
      </View>
      <ScrollView>
        <View
          style={
            Array [
              Object {
                "flex": 1,
                "paddingHorizontal": 16,
                "paddingVertical": 16,
              },
              Object {
                "backgroundColor": "#FFFFFF",
              },
            ]
          }
        >
          <ForwardRef
            onPress={[Function]}
          >
            <AvatarLogoTitle />
          </ForwardRef>
          <View
            style={
              Object {
                "alignItems": "center",
                "paddingBottom": 16,
                "paddingTop": 28,
              }
            }
          >
            <View
              style={
                Object {
                  "flexDirection": "row",
                }
              }
            >
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "backgroundColor": "#000000",
                      "flexDirection": "row",
                      "justifyContent": "center",
                    },
                    Object {
                      "alignItems": "center",
                      "borderWidth": 1,
                      "height": 32,
                      "width": 82,
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
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
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
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "backgroundColor": "#000000",
                      "flexDirection": "row",
                      "justifyContent": "center",
                    },
                    Object {
                      "alignItems": "center",
                      "borderBottomWidth": 1,
                      "borderRightWidth": 1,
                      "borderTopWidth": 1,
                      "height": 32,
                      "width": 80,
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
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
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
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    Object {
                      "backgroundColor": "#000000",
                      "flexDirection": "row",
                      "justifyContent": "center",
                    },
                    Object {
                      "alignItems": "center",
                      "borderBottomWidth": 1,
                      "borderRightWidth": 1,
                      "borderTopWidth": 1,
                      "height": 32,
                      "width": 125,
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
                        "fontFamily": "Milliard",
                        "fontSize": 16,
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "lineHeight": 20,
                        "textAlign": "center",
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
              </ForwardRef>
            </View>
          </View>
          <TouchableNavigationCard
            cardName="Badges"
            navigationName="Badges"
            picture={
              <Image
                source={
                  Object {
                    "testUri": "../../../assets/images/icons/my-profile/lightBadges.png",
                  }
                }
                style={
                  Object {
                    "borderRadius": 0,
                    "height": 22.5,
                    "resizeMode": "contain",
                    "width": 22.5,
                  }
                }
              />
            }
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
              Badges
            </Text>
          </TouchableNavigationCard>
          <TouchableNavigationCard
            cardName="Preferences"
            navigationName="Preferences"
            picture={
              <Image
                source={
                  Object {
                    "testUri": "../../../assets/images/icons/my-profile/lightPreferences.png",
                  }
                }
                style={
                  Object {
                    "borderRadius": 0,
                    "height": 22.5,
                    "resizeMode": "contain",
                    "width": 22.5,
                  }
                }
              />
            }
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
              Preferences
            </Text>
          </TouchableNavigationCard>
          <TouchableNavigationCard
            cardName="Your cars"
            navigationName="CarTabs"
            picture={
              <Image
                source={
                  Object {
                    "testUri": "../../../assets/images/icons/my-profile/lightCars.png",
                  }
                }
                style={
                  Object {
                    "borderRadius": 0,
                    "height": 22.5,
                    "resizeMode": "contain",
                    "width": 22.5,
                  }
                }
              />
            }
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
              My Cars
            </Text>
          </TouchableNavigationCard>
          <TouchableNavigationCard
            cardName="Address book"
            navigationName="AddressBookTabs"
            picture={
              <Image
                source={
                  Object {
                    "testUri": "../../../assets/images/icons/my-profile/lightAddress.png",
                  }
                }
                style={
                  Object {
                    "borderRadius": 0,
                    "height": 22.5,
                    "resizeMode": "contain",
                    "width": 22.5,
                  }
                }
              />
            }
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
              Address Book
            </Text>
          </TouchableNavigationCard>
          <View
            style={
              Object {
                "paddingTop": 21,
              }
            }
          >
            <HeaderLogoutButton />
          </View>
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "center",
                "paddingBottom": 19,
                "paddingTop": 40,
              }
            }
          >
            <ForwardRef>
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "normal",
                      "lineHeight": 18,
                      "paddingRight": 16,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                Privacy Policy
              </Text>
            </ForwardRef>
            <View>
              <Text
                style={
                  Object {
                    "color": "#909095",
                  }
                }
              >
                •
              </Text>
            </View>
            <ForwardRef>
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "normal",
                      "lineHeight": 18,
                      "paddingLeft": 16,
                      "paddingRight": 16,
                    },
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                Terms of Service
              </Text>
            </ForwardRef>
          </View>
        </View>
      </ScrollView>
      <BottomPopup
        enabledGestureInteraction={false}
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
                "height": 210,
              }
            }
          >
            <ForwardRef
              onPress={[Function]}
              style={
                Object {
                  "alignItems": "flex-start",
                  "height": 54,
                  "justifyContent": "center",
                  "paddingLeft": 16,
                  "width": 750,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                Add photo
              </Text>
            </ForwardRef>
            <View
              style={
                Array [
                  Object {
                    "height": 1,
                    "marginHorizontal": 16,
                  },
                  Object {
                    "backgroundColor": "#909095",
                  },
                ]
              }
            />
            <ForwardRef
              style={
                Object {
                  "alignItems": "flex-start",
                  "height": 54,
                  "justifyContent": "center",
                  "paddingLeft": 16,
                  "width": 750,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 13,
                      "fontWeight": "700",
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#0B171B",
                    },
                  ]
                }
              >
                My number
              </Text>
            </ForwardRef>
            <View
              style={
                Array [
                  Object {
                    "height": 1,
                    "marginHorizontal": 16,
                  },
                  Object {
                    "backgroundColor": "#909095",
                  },
                ]
              }
            />
            <React.Fragment />
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
                    "fontFamily": "Milliard Bold",
                    "fontSize": 14,
                    "letterSpacing": 0.25,
                    "lineHeight": 18,
                    "paddingBottom": 24,
                    "paddingLeft": 16,
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
            210,
            -50,
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
    </View>
  `));
