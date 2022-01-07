import React from "react";
import renderer from "react-test-renderer";
import TouchableCard from "../../src/components/touchable-card/TouchableCard";

test("renders correctly", async () =>
  expect(
    renderer
      .create(<TouchableCard iconColor={"black"} iconName={"location"} />)
      .toJSON()
  ).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "#FFFFFF",
        }
      }
    >
      <View
        accessible={true}
        collapsable={false}
        focusable={false}
        nativeID="animatedComponent"
        onClick={[Function]}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "borderBottomColor": "#AAA9AE",
            "borderBottomWidth": 1,
            "borderTopColor": "#AAA9AE",
            "flexDirection": "row",
            "fontSize": 14,
            "fontWeight": "bold",
            "justifyContent": "space-between",
            "marginLeft": 8,
            "marginRight": 8,
            "opacity": 1,
            "paddingBottom": 18,
            "paddingLeft": 27,
            "paddingRight": 10,
            "paddingTop": 18,
          }
        }
      >
        <View
          style={
            Object {
              "alignItems": "center",
              "flexDirection": "row",
            }
          }
        >
          <Text
            allowFontScaling={false}
            style={
              Array [
                Object {
                  "color": "black",
                  "fontSize": 12,
                },
                Array [
                  Object {
                    "marginRight": 20,
                  },
                ],
                Object {
                  "fontFamily": "Ionicons",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                },
                Object {},
              ]
            }
          >
            
          </Text>
          <View
            style={
              Object {
                "flexDirection": "column",
              }
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "flex": 2,
                    "fontFamily": "Open Sans Regular",
                    "fontSize": 14,
                    "fontStyle": "normal",
                    "fontWeight": "bold",
                    "lineHeight": 16,
                    "marginBottom": 2,
                    "marginTop": 1,
                  },
                  Object {
                    "color": "#0B171B",
                  },
                ]
              }
            />
            <Text
              style={
                Array [
                  Object {
                    "flex": 4,
                    "fontFamily": "Open Sans Regular",
                    "fontSize": 12,
                  },
                  Object {
                    "color": undefined,
                  },
                ]
              }
            />
          </View>
        </View>
      </View>
    </View>
  `));
