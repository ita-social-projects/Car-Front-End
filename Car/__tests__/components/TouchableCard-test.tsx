import React from "react";
import renderer from "react-test-renderer";
import TouchableCard from "../../src/components/touchable-card/TouchableCard";

test("renders correctly", () =>
    expect(renderer.create(<TouchableCard />).toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "backgroundColor": "white",
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
            "borderBottomColor": "#C1C1C5",
            "borderBottomWidth": 1,
            "borderTopColor": "#C1C1C5",
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
                  "color": undefined,
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
                Object {
                  "color": "black",
                  "flex": 2,
                  "fontFamily": "Open Sans",
                  "fontSize": 14,
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "lineHeight": 16,
                  "marginBottom": 2,
                  "marginTop": 1,
                }
              }
            />
            <Text
              style={
                Array [
                  Object {
                    "color": "#909095",
                    "flex": 4,
                    "fontFamily": "Open Sans",
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
