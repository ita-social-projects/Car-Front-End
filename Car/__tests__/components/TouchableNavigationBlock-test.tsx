import React from "react";
import renderer from "react-test-renderer";
import TouchableNavigationBlock from "../../src/components/touchable-navigation-block/TouchableNavigationBlock";

test("renders correctly", () =>
    expect(renderer.create(<TouchableNavigationBlock />).toJSON())
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
            "opacity": 1,
          }
        }
      >
        <BVLinearGradient
          colors={
            Array [
              undefined,
              undefined,
            ]
          }
          endPoint={
            Object {
              "x": 1,
              "y": 1,
            }
          }
          locations={null}
          startPoint={
            Object {
              "x": 0,
              "y": 0,
            }
          }
          style={
            Object {
              "borderColor": "#FFFFFF",
              "borderRadius": 8,
              "borderStyle": "solid",
              "borderWidth": 2,
              "height": 160,
              "marginVertical": 5,
            }
          }
        >
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "center",
                "paddingHorizontal": 10,
              }
            }
          >
            <Image
              style={
                Object {
                  "height": undefined,
                  "marginTop": 15,
                  "width": undefined,
                }
              }
            />
            <Text
              style={
                Object {
                  "color": "#FFFFFF",
                  "flex": 1,
                  "fontFamily": "Proxima Nova",
                  "fontSize": 24,
                  "justifyContent": "center",
                  "marginLeft": 20,
                  "textAlignVertical": "center",
                  "textTransform": "uppercase",
                  "width": 250,
                }
              }
            />
          </View>
        </BVLinearGradient>
      </View>
    </View>
  `));
