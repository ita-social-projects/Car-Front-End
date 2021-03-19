import React from "react";
import renderer from "react-test-renderer";
import CarButton from "../../src/components/car-button/CarButton";

test("renders correctly", () =>
  expect(renderer.create(<CarButton />).toJSON()).toMatchInlineSnapshot(`
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
          "alignItems": "center",
          "backgroundColor": "#FFFFFF",
          "borderColor": "#000000",
          "borderWidth": 2,
          "opacity": 1,
          "paddingHorizontal": 16,
          "paddingVertical": 14,
        }
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontSize": 16,
              "fontWeight": "bold",
              "lineHeight": 20,
              "textTransform": "uppercase",
            },
          ]
        }
      >
        props.title
      </Text>
    </View>
  `));
