import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyPage from "../../../src/activity/journey/journey-activity/journey-page/JourneyPage";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", () =>
    expect(
        renderer.render(
            <JourneyPage props={{ route: { params: { journeyId: 1 } } }} />
        )
    ).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
          "backgroundColor": "#88FF88",
          "flex": 1,
        }
      }
    >
      <Text
        style={
          Object {
            "color": "#000000",
            "fontFamily": "Proxima Nova",
          }
        }
      >
        Map implementation is in progress
      </Text>
      <BottomPopup
        enabledInnerScrolling={true}
        initialSnap={0}
        renderContent={
          <View
            style={
              Object {
                "backgroundColor": "white",
              }
            }
          >
            <View
              style={
                Object {
                  "alignItems": "center",
                  "backgroundColor": "#FFFFFF",
                  "height": 500,
                  "justifyContent": "center",
                }
              }
            >
              <Indicator
                color="#414045"
                size="large"
                text="Loading information..."
              />
            </View>
          </View>
        }
        renderHeader={
          <View
            style={
              Object {
                "backgroundColor": "white",
              }
            }
          >
            <View
              style={
                Object {
                  "alignSelf": "center",
                  "width": "90%",
                }
              }
            >
              <ForwardRef
                onPress={[Function]}
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "space-around",
                    "paddingLeft": 2,
                  }
                }
              >
                <View
                  style={
                    Object {
                      "alignItems": "flex-start",
                      "justifyContent": "space-around",
                      "margin": 7,
                      "marginLeft": 13,
                    }
                  }
                >
                  <AvatarLogo
                    size={38.5}
                  />
                </View>
                <View
                  style={
                    Object {
                      "flex": 5,
                      "flexDirection": "column",
                      "justifyContent": "space-around",
                    }
                  }
                >
                  <Text
                    style={
                      Object {
                        "fontFamily": "Open Sans",
                        "fontSize": 15,
                        "fontWeight": "700",
                      }
                    }
                  >
                     
                    's journey
                  </Text>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                        "justifyContent": "space-between",
                      }
                    }
                  >
                    <Text
                      style={
                        Object {
                          "color": "#909095",
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "100",
                        }
                      }
                    />
                    <Text
                      style={
                        Object {
                          "color": "#02A2CF",
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "700",
                        }
                      }
                    >
                      01/01/1970
                    </Text>
                  </View>
                </View>
              </ForwardRef>
              <View
                style={
                  Object {
                    "height": 27,
                  }
                }
              />
              <Themed.Divider
                style={
                  Object {
                    "backgroundColor": "#C1C1C5",
                    "height": 1,
                    "width": "100%",
                  }
                }
              />
              <View
                style={
                  Object {
                    "alignSelf": "center",
                    "backgroundColor": "#FFFFFF",
                    "paddingHorizontal": "5%",
                    "position": "absolute",
                    "top": 411,
                    "width": 750,
                  }
                }
              >
                <Themed.Divider
                  style={
                    Object {
                      "backgroundColor": "#C1C1C5",
                      "height": 1,
                      "width": "100%",
                    }
                  }
                />
                <View
                  style={
                    Object {
                      "flexDirection": "row",
                      "justifyContent": "flex-end",
                      "marginBottom": 16,
                      "marginTop": 16,
                    }
                  }
                >
                  <ForwardRef
                    disabled={false}
                    onPress={[Function]}
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "backgroundColor": "black",
                          "height": 51,
                          "justifyContent": "center",
                          "width": 386.25,
                        },
                        false,
                      ]
                    }
                  >
                    <Text
                      style={
                        Object {
                          "color": "white",
                          "fontSize": 18,
                          "fontWeight": "700",
                          "textTransform": "uppercase",
                        }
                      }
                    >
                      Request to driver
                    </Text>
                  </ForwardRef>
                </View>
              </View>
            </View>
          </View>
        }
        snapPoints={
          Array [
            683,
            282,
          ]
        }
        style={
          Object {
            "backgroundColor": "white",
          }
        }
      />
    </View>
  `));
