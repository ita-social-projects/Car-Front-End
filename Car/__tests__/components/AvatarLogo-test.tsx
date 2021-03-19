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
            "backgroundColor": "#c3b2b6",
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
            "backgroundColor": "#000000",
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
        
      </Text>
    </View>
  `));
