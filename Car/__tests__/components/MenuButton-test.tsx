import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "../../src/components/menu-button/MenuButton";

test("renders correctly", () =>
    expect(renderer.create(<MenuButton />).toJSON()).toMatchInlineSnapshot(`
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
        Array [
          Object {
            "flexDirection": "column",
            "height": 44,
            "justifyContent": "center",
            "paddingLeft": 12,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
      }
    >
      <View>
        <View
          style={
            Object {
              "flexDirection": "row",
              "justifyContent": "space-between",
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
                    "fontSize": 13,
                    "fontWeight": "bold",
                    "lineHeight": 42,
                    "paddingLeft": 24,
                  },
                  Object {
                    "color": "black",
                  },
                  Object {
                    "color": "black",
                  },
                ]
              }
            />
          </View>
          <View
            style={
              Object {
                "justifyContent": "center",
              }
            }
          >
            <Text
              allowFontScaling={false}
              style={
                Array [
                  Object {
                    "color": "black",
                    "fontSize": 30,
                  },
                  Object {
                    "paddingRight": 12,
                  },
                  Object {
                    "fontFamily": "Material Icons",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                  },
                  Object {},
                ]
              }
            >
              
            </Text>
          </View>
        </View>
        <View
          style={
            Array [
              Object {
                "flexWrap": "wrap",
                "height": 1,
                "width": "100%",
              },
              Object {
                "backgroundColor": "#C1C1C5",
              },
            ]
          }
        />
      </View>
    </View>
  `));
