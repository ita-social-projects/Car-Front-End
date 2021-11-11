import React from "react";
import renderer from "react-test-renderer";
import HeaderRequestButton from "../../src/components/header-request-button/HeaderRequestButton";

test("renders correctly", async () =>
  expect(renderer.create(<HeaderRequestButton />).toJSON())
    .toMatchInlineSnapshot(`
    <View
      accessible={true}
      collapsable={false}
      focusable={true}
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
              "color": "#02A2CF",
            },
          ]
        }
      >
        Request
      </Text>
    </View>
  `));
