import React from "react";
import renderer from "react-test-renderer";
import HeaderLogoutButton from "../../src/components/header-logout-button/HeaderLogoutButton";

test("renders correctly", () =>
  expect(renderer.create(<HeaderLogoutButton />).toJSON())
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
        style={
          Object {
            "color": "#EC6400",
            "fontFamily": "Open Sans",
            "fontSize": 20,
            "fontWeight": "700",
          }
        }
      >
        Logout
      </Text>
    </View>
  `));
