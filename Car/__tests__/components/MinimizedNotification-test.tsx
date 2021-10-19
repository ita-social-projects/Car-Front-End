import React from "react";
import renderer from "react-test-renderer";
import User from "../../models/user/User";
import MinimizedNotification from "../../src/components/minimized-notification/MinimizedNotification";

const testUser: User = {
    id: 0,
    name: "string",
    surname: "string",
    position: "string",
    location: "string",
    email: "abc@gmail.com",
    token: "string",
    fcmtoken: null,
    hireDate: new Date(0),
    imageId: "string | null",
    journeyCount: 0,
    phoneNumber: null,
};

test("renders correctly", async () =>
    expect(
        renderer
            .create(
                <MinimizedNotification
                    notificationId={0}
                    user={testUser}
                    notificationTitle={"New applicant"}
                    read={false}
                    date={new Date(0)}
                    openModal={() => {}}
                />
            )
            .toJSON()
    ).toMatchInlineSnapshot(`
    <View
      accessible={true}
      focusable={true}
      onClick={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        Object {
          "opacity": 1,
        }
      }
    >
      <View
        style={
          Object {
            "backgroundColor": "rgba(0,161,206,0.1)",
          }
        }
      >
        <View
          style={
            Array [
              undefined,
              undefined,
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
                undefined,
              ]
            }
          >
            <View>
              <View
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "borderRadius": 1000,
                      "justifyContent": "center",
                    },
                    Object {
                      "backgroundColor": "transparent",
                      "height": 38.5,
                      "width": 38.5,
                    },
                  ]
                }
              >
                <ActivityIndicator
                  animating={true}
                  color="#414045"
                  hidesWhenStopped={true}
                  size={17.906976744186046}
                  style={
                    Object {
                      "marginHorizontal": 0,
                      "marginVertical": 0,
                      "position": "absolute",
                    }
                  }
                />
                <Image
                  source={
                    Object {
                      "uri": "https://carstorageaccount.blob.core.windows.net/images/string | null",
                    }
                  }
                  style={
                    Array [
                      Object {
                        "alignItems": "center",
                        "borderRadius": 1000,
                        "justifyContent": "center",
                      },
                      Object {
                        "backgroundColor": "transparent",
                        "height": 38.5,
                        "width": 38.5,
                      },
                    ]
                  }
                />
              </View>
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                string string
              </Text>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                New applicant
              </Text>
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                52 years
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              undefined,
              Object {
                "backgroundColor": "rgba(0,0,0,0)",
                "borderBottomColor": "#02A2CF",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </View>
  `));

test("renders correctly", async () =>
    expect(
        renderer
            .create(
                <MinimizedNotification
                    notificationId={0}
                    user={testUser}
                    notificationTitle={"New applicant"}
                    read={true}
                    date={new Date(0)}
                    openModal={() => {}}
                />
            )
            .toJSON()
    ).toMatchInlineSnapshot(`
    <View
      accessible={true}
      focusable={true}
      onClick={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        Object {
          "opacity": 1,
        }
      }
    >
      <View
        style={null}
      >
        <View
          style={
            Array [
              undefined,
              undefined,
            ]
          }
        >
          <View
            style={
              Array [
                undefined,
                undefined,
              ]
            }
          >
            <View>
              <View
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "borderRadius": 1000,
                      "justifyContent": "center",
                    },
                    Object {
                      "backgroundColor": "transparent",
                      "height": 38.5,
                      "width": 38.5,
                    },
                  ]
                }
              >
                <ActivityIndicator
                  animating={true}
                  color="#414045"
                  hidesWhenStopped={true}
                  size={17.906976744186046}
                  style={
                    Object {
                      "marginHorizontal": 0,
                      "marginVertical": 0,
                      "position": "absolute",
                    }
                  }
                />
                <Image
                  source={
                    Object {
                      "uri": "https://carstorageaccount.blob.core.windows.net/images/string | null",
                    }
                  }
                  style={
                    Array [
                      Object {
                        "alignItems": "center",
                        "borderRadius": 1000,
                        "justifyContent": "center",
                      },
                      Object {
                        "backgroundColor": "transparent",
                        "height": 38.5,
                        "width": 38.5,
                      },
                    ]
                  }
                />
              </View>
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#02A2CF",
                    },
                  ]
                }
              >
                string string
              </Text>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                New applicant
              </Text>
            </View>
            <View>
              <Text
                style={
                  Array [
                    undefined,
                    Object {
                      "color": "#909095",
                    },
                  ]
                }
              >
                52 years
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            Array [
              undefined,
              Object {
                "backgroundColor": "rgba(0,0,0,0)",
                "borderBottomColor": "#AAA9AE",
                "borderLeftColor": "rgba(0,0,0,0)",
                "borderRightColor": "rgba(0,0,0,0)",
                "borderTopColor": "rgba(0,0,0,0)",
              },
            ]
          }
        />
      </View>
    </View>
  `));
