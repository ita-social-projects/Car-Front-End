import React from "react";
import renderer from "react-test-renderer";
import TouchableNavigationCard from "../../src/components/touchable-navigation-card/TouchableNavigationCard";

test("renders correctly", () =>
    expect(renderer.create(<TouchableNavigationCard />).toJSON())
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
            "borderBottomColor": "rgba(0,0,0,0.5)",
            "opacity": 1,
          }
        }
      >
        <View>
          <View
            style={
              Object {
                "flexDirection": "row",
              }
            }
          >
            <View />
            <View />
          </View>
        </View>
        <View>
          <Text
            allowFontScaling={false}
            style={
              Array [
                Object {
                  "color": "#414045",
                  "fontSize": 20,
                },
                undefined,
                Object {
                  "fontFamily": "Ionicons",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                },
                Object {},
              ]
            }
          >
            
          </Text>
        </View>
      </View>
    </View>
  `));
