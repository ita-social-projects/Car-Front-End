import React from "react";
import renderer from "react-test-renderer";
import TouchableNavigationBlock from "../../src/components/touchable-navigation-block/TouchableNavigationBlock";

test("renders correctly", async () =>
    expect(
        renderer
            .create(
                <TouchableNavigationBlock to={""} from={""} blockImage={require("")} />
            )
            .toJSON()
    ).toMatchInlineSnapshot(`
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
            Array [
              Object {
                "borderRadius": 8,
                "borderStyle": "solid",
                "borderWidth": 3,
                "elevation": 8,
                "height": 160,
                "marginHorizontal": 7,
                "marginVertical": 5,
              },
              Object {
                "borderColor": "#FFFFFF",
              },
            ]
          }
        >
          <View
            style={
              Object {
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "paddingHorizontal": 10,
              }
            }
          >
            <Image
              source={Object {}}
              style={
                Object {
                  "aspectRatio": 1.17,
                  "borderBottomLeftRadius": 6,
                  "flex": 1,
                  "marginLeft": "-2.9%",
                  "marginTop": "2.5%",
                  "top": 0,
                  "width": undefined,
                }
              }
            />
            <Text
              style={
                Array [
                  Object {
                    "color": "#FFFFFF",
                    "flex": 1,
                    "fontFamily": "Proxima Nova Rg Bold",
                    "fontSize": 24,
                    "justifyContent": "center",
                    "textAlignVertical": "center",
                    "textTransform": "uppercase",
                    "width": 250,
                  },
                  Object {
                    "marginLeft": 30,
                    "marginRight": 0,
                  },
                ]
              }
            />
          </View>
        </BVLinearGradient>
      </View>
    </View>
    `));
