import React from "react";
import renderer from "react-test-renderer";
import HeaderLeaveButton from "../../src/components/create-journey-more-options-popup/header-leave-button/HeaderLeaveButton";

test("renders correctly", async () =>
    expect(renderer.create(<HeaderLeaveButton />).toJSON())
        .toMatchInlineSnapshot(`
    <View>
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
            "height": 44,
            "justifyContent": "center",
            "opacity": 1,
            "paddingHorizontal": 12,
          }
        }
      >
        <View
          style={
            Object {
              "justifyContent": "center",
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "color": "#EC6400",
                  "fontSize": 20,
                  "fontWeight": "bold",
                  "lineHeight": 40,
                  "paddingLeft": 20,
                },
                Object {
                  "color": "#EC6400",
                },
              ]
            }
          >
            Leave
          </Text>
        </View>
      </View>
      <Modal
        animationType="fade"
        hardwareAccelerated={false}
        statusBarTranslucent={true}
        transparent={true}
        visible={false}
      >
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
              "alignItems": "center",
              "backgroundColor": "rgba(0, 0, 0, 0.5)",
              "flex": 1,
              "flexDirection": "column",
              "justifyContent": "center",
            }
          }
        >
          <View
            accessible={true}
            focusable={false}
            onClick={[Function]}
            onResponderGrant={[Function]}
            onResponderMove={[Function]}
            onResponderRelease={[Function]}
            onResponderTerminate={[Function]}
            onResponderTerminationRequest={[Function]}
            onStartShouldSetResponder={[Function]}
            style={
              Object {
                "alignItems": "center",
                "backgroundColor": "#FFFFFF",
                "borderRadius": 16,
                "height": 310,
                "justifyContent": "center",
                "opacity": 1,
                "paddingBottom": 24,
                "paddingHorizontal": 20,
                "paddingTop": 32,
                "paddingVertical": 30,
                "width": 344,
              }
            }
          >
            <Text
              style={
                Object {
                  "color": "#0B171B",
                  "fontFamily": undefined,
                  "fontSize": 14,
                  "fontWeight": "700",
                  "lineHeight": 18,
                }
              }
            >
              Leave Ride
            </Text>
            <Text
              style={
                Object {
                  "color": "#909095",
                  "marginBottom": 40,
                  "marginHorizontal": 21.5,
                  "marginTop": 32,
                  "textAlign": "center",
                }
              }
            >
              Are you sure you want to leave the ride?
            </Text>
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
                  "alignItems": "center",
                  "backgroundColor": "#D80056",
                  "height": 56,
                  "marginBottom": 26,
                  "opacity": 1,
                  "paddingVertical": 18,
                  "width": 304,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "color": "#0B171B",
                      "fontFamily": undefined,
                      "fontSize": 14,
                      "fontWeight": "700",
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#FFFFFF",
                    },
                  ]
                }
              >
                Yes
              </Text>
            </View>
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
              <Text
                style={
                  Object {
                    "color": "#0B171B",
                    "fontFamily": undefined,
                    "fontSize": 14,
                    "fontWeight": "700",
                    "lineHeight": 18,
                  }
                }
              >
                No
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        hardwareAccelerated={false}
        statusBarTranslucent={true}
        transparent={true}
        visible={false}
      >
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
              "alignItems": "center",
              "backgroundColor": "rgba(0, 0, 0, 0.5)",
              "flex": 1,
              "flexDirection": "column",
              "justifyContent": "center",
            }
          }
        >
          <View
            accessible={true}
            focusable={false}
            onClick={[Function]}
            onResponderGrant={[Function]}
            onResponderMove={[Function]}
            onResponderRelease={[Function]}
            onResponderTerminate={[Function]}
            onResponderTerminationRequest={[Function]}
            onStartShouldSetResponder={[Function]}
            style={
              Object {
                "alignItems": "center",
                "backgroundColor": "#FFFFFF",
                "borderRadius": 16,
                "height": 310,
                "justifyContent": "center",
                "opacity": 1,
                "paddingBottom": 24,
                "paddingHorizontal": 20,
                "paddingTop": 32,
                "paddingVertical": 30,
                "width": 344,
              }
            }
          >
            <Text
              style={
                Object {
                  "color": "#0B171B",
                  "fontFamily": undefined,
                  "fontSize": 14,
                  "fontWeight": "700",
                  "lineHeight": 18,
                }
              }
            >
              Ride leaving
            </Text>
            <Text
              style={
                Object {
                  "color": "#909095",
                  "marginBottom": 40,
                  "marginHorizontal": 21.5,
                  "marginTop": 32,
                  "textAlign": "center",
                }
              }
            >
              Ride was successfully left
            </Text>
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
                  "alignItems": "center",
                  "backgroundColor": "#D80056",
                  "height": 56,
                  "marginBottom": 26,
                  "opacity": 1,
                  "paddingVertical": 18,
                  "width": 304,
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "color": "#0B171B",
                      "fontFamily": undefined,
                      "fontSize": 14,
                      "fontWeight": "700",
                      "lineHeight": 18,
                    },
                    Object {
                      "color": "#FFFFFF",
                    },
                  ]
                }
              >
                Ok
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  `));
