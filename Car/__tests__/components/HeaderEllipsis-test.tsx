import React from "react";
import renderer from "react-test-renderer";
import HeaderEllipsis from "../../src/components/header-ellipsis/HeaderEllipsis";

test("renders correctly", async () =>
    expect(renderer.create(<HeaderEllipsis />).toJSON()).toMatchInlineSnapshot(`
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
          "opacity": 1,
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
