import React from "react";
import renderer from "react-test-renderer";
import AvatarLogo from "../../src/components/avatar-logo/AvatarLogo";

test("renders correctly", () =>
    expect(
        renderer
            .create(<AvatarLogo user={{ name: "Abc", surname: "Abc" }} />)
            .toJSON()
    ).toMatchInlineSnapshot(`
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
        renderer
            .create(
                <AvatarLogo user={{ name: "Abc", surname: "Abc", imageId: "AbCdE" }} />
            )
            .toJSON()
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
    expect(renderer.create(<AvatarLogo />).toJSON()).toMatchInlineSnapshot(`
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
