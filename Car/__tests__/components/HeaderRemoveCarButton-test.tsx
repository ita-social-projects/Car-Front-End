import React from "react";
import renderer from "react-test-renderer";
import HeaderRemoveCarButton from "../../src/components/header-remove-car-button/HeaderRemoveCarButton";

test("renders correctly", async () =>
  expect(renderer.create(<HeaderRemoveCarButton />).toJSON())
    .toMatchInlineSnapshot(`
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
              "color": "#EC6400",
            },
          ]
        }
      >
        Remove
      </Text>
    </View>
  `));
