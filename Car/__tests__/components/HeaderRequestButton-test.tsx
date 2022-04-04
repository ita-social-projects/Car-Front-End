import React from "react";
import renderer from "react-test-renderer";
import HeaderRequestButton from "../../src/components/header-request-button/HeaderRequestButton";

test("renders correctly", async () =>
    expect(renderer.create(<HeaderRequestButton />).toJSON())
        .toMatchInlineSnapshot(`
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
        allowFontScaling={false}
        style={
          Array [
            Object {
              "color": "#0B171B",
              "fontSize": 30,
            },
            Object {
              "paddingRight": 12,
            },
            Object {
              "fontFamily": "Ionicons",
              "fontStyle": "normal",
              "fontWeight": "normal",
            },
            Object {},
          ]
        }
      >
        
      </Text>
    </View>
  `));
