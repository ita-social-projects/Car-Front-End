import React from "react";
import renderer from "react-test-renderer";
import HeaderBackButton from "../../src/components/header-back-button/HeaderBackButton";

test("renders correctly", async () =>
    expect(renderer.create(<HeaderBackButton />).toJSON()).toMatchInlineSnapshot(`
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
          "flexDirection": "row",
          "justifyContent": "space-between",
          "opacity": 1,
        }
      }
    >
      <Text
        allowFontScaling={false}
        style={
          Array [
            Object {
              "color": "#02A2CF",
              "fontSize": 35,
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
        
      </Text>
      <View
        style={
          Object {
            "flexDirection": "column",
            "justifyContent": "center",
          }
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": "Open Sans",
                "fontSize": 20,
                "fontWeight": "700",
              },
              Object {
                "color": "#02A2CF",
              },
            ]
          }
        >
          Back
        </Text>
      </View>
    </View>
  `));
