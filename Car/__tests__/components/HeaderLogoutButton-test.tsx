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
                "fontSize": 20,
                "fontWeight": "700",
              },
              Object {
                "color": "#EC6400",
              },
            ]
          }
        >
          Logout
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
                "borderRadius": 15,
                "height": 260,
                "justifyContent": "space-between",
                "opacity": 1,
                "paddingHorizontal": 20,
                "paddingVertical": 30,
                "width": "80%",
              }
            }
          >
            <Text
              style={
                Object {
                  "color": "#0B171B",
                  "fontFamily": undefined,
                  "fontSize": 16,
                  "fontWeight": "700",
                }
              }
            >
              ARE YOU SURE?
            </Text>
            <Text
              style={
                Object {
                  "color": "#0B171B",
                  "marginVertical": 20,
                }
              }
            >
              You are about to logout from the App
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
                  "backgroundColor": "#d80056",
                  "opacity": 1,
                  "paddingVertical": 10,
                  "width": "100%",
                }
              }
            >
              <Text
                style={
                  Array [
                    Object {
                      "fontFamily": undefined,
                      "fontSize": 16,
                      "fontWeight": "700",
                    },
                    Object {
                      "color": "white",
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
                    "fontSize": 16,
                    "fontWeight": "700",
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
