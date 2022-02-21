import React from "react";
import renderer from "react-test-renderer";
import HeaderLogoutButton from "../../src/components/header-logout-button/HeaderLogoutButton";

test("renders correctly", async () =>
    expect(renderer.create(<HeaderLogoutButton />).toJSON())
        .toMatchInlineSnapshot(`
    Array [
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
            "justifyContent": "center",
            "opacity": 1,
            "paddingRight": 17,
          }
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": "Open Sans ExtraBold",
                "fontSize": 16,
                "fontStyle": "normal",
                "fontWeight": "bold",
                "letterSpacing": 0.25,
                "width": 62,
              },
              Object {
                "color": "#EC6400",
              },
            ]
          }
        >
          Log out
        </Text>
      </View>,
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
              ARE YOU SURE?
            </Text>
            <Text
              style={
                Object {
                  "color": "#909095",
                  "fontSize": 16,
                  "marginBottom": 40,
                  "marginHorizontal": 21.5,
                  "marginTop": 32,
                  "textAlign": "center",
                }
              }
            >
              You are about to log out from the App
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
                Yes, log out
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
                No, stay
              </Text>
            </View>
          </View>
        </View>
      </Modal>,
    ]
  `));
