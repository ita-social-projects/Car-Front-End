import React from "react";
import shallowRender from "react-test-renderer/shallow";
import AvatarLogo from "../../src/components/avatar-logo/AvatarLogo";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(renderer.render(<AvatarLogo user={{ name: "Abc", surname: "Abc" }} />))
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignItems": "center",
            "borderRadius": 1000,
            "justifyContent": "center",
          },
          Object {
            "backgroundColor": "#c3b2b6",
            "height": undefined,
            "width": undefined,
          },
        ]
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Open Sans",
              "fontWeight": "700",
              "textTransform": "uppercase",
            },
            Object {
              "color": "#FFFFFF",
              "fontSize": NaN,
              "lineHeight": NaN,
              "paddingTop": NaN,
            },
          ]
        }
      >
        AA
      </Text>
    </View>
  `));

test("renders correctly", () =>
    expect(
        renderer.render(
            <AvatarLogo user={{ name: "Abc", surname: "Abc", imageId: "AbCdE" }} />
        )
    ).toMatchInlineSnapshot(`
    <Image
      source={
        Object {
          "uri": "https://drive.google.com/uc?id=AbCdE&export=view",
        }
      }
      style={
        Array [
          Object {
            "alignItems": "center",
            "borderRadius": 1000,
            "justifyContent": "center",
          },
          Object {
            "backgroundColor": "#c3b2b6",
            "height": undefined,
            "width": undefined,
          },
        ]
      }
    />
  `));

test("renders correctly", () =>
    expect(renderer.render(<AvatarLogo />)).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignItems": "center",
            "borderRadius": 1000,
            "justifyContent": "center",
          },
          Object {
            "backgroundColor": "#000000",
            "height": undefined,
            "width": undefined,
          },
        ]
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Open Sans",
              "fontWeight": "700",
              "textTransform": "uppercase",
            },
            Object {
              "color": "#FFFFFF",
              "fontSize": NaN,
              "lineHeight": NaN,
              "paddingTop": NaN,
            },
          ]
        }
      >
        
      </Text>
    </View>
  `));
