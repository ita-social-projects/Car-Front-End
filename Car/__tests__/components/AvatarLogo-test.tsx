import React from "react";
import renderer from "react-test-renderer";
import AvatarLogo from "../../src/components/avatar-logo/AvatarLogo";

test("renders correctly", () =>
  expect(
    renderer.create(<AvatarLogo user={{ name: "A", surname: "A" }} />).toJSON()
  ).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Array [
            Object {
              "alignItems": "center",
              "borderRadius": 1000,
              "justifyContent": "center",
            },
            Object {
              "height": undefined,
              "width": undefined,
            },
          ],
          Object {
            "backgroundColor": "#8d6765",
          },
        ]
      }
    >
      <Text
        style={
          Object {
            "color": "#FFFFFF",
            "fontFamily": "Open Sans",
            "fontSize": 16,
            "fontWeight": "700",
            "lineHeight": 16,
            "paddingTop": 3,
            "textTransform": "uppercase",
          }
        }
      >
        AA
      </Text>
    </View>
  `));
