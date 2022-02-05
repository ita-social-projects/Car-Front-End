import React from "react";
import renderer from "react-test-renderer";
import MenuButton from "../../src/components/menu-button/MenuButton";

test("renders correctly", async () =>
    expect(renderer.create(<MenuButton />).toJSON()).toMatchInlineSnapshot(`
    <View
      accessible={true}
      focusable={true}
      onBlur={[Function]}
      onClick={[Function]}
      onFocus={[Function]}
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
            "height": 48,
            "justifyContent": "center",
            "paddingHorizontal": 12,
          },
          Object {
            "backgroundColor": "#FFFFFF",
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
                    "marginBottom": 4,
                    "paddingLeft": 12,
                  },
                  Object {
                    "color": "#0B171B",
                  },
                  Object {
                    "color": "#0B171B",
                  },
                ]
              }
            />
          </View>
          <View />
        </View>
        <View
          style={
            Array [
              Object {
                "flexWrap": "wrap",
                "height": 1,
                "marginLeft": 12,
                "width": "92%",
              },
              Object {
                "backgroundColor": "#C4C4C4",
              },
            ]
          }
        />
      </View>
    </View>
  `));
