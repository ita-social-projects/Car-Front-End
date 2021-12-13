import React from "react";
import renderer from "react-test-renderer";
import AvatarLogo from "../../src/components/avatar-logo/AvatarLogo";

test("renders correctly", async () =>
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
            "marginLeft": undefined,
            "marginTop": undefined,
            "width": undefined,
          },
        ]
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Open Sans Bold",
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

test("renders correctly", async () =>
    expect(
        renderer
            .create(
                <AvatarLogo user={{ name: "Abc", surname: "Abc", imageId: "AbCdE" }} />
            )
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
            "backgroundColor": "transparent",
            "height": undefined,
            "marginLeft": undefined,
            "marginTop": undefined,
            "width": undefined,
          },
        ]
      }
    >
      <ActivityIndicator
        animating={true}
        color="#414045"
        hidesWhenStopped={true}
        size={NaN}
        style={
          Object {
            "marginHorizontal": 0,
            "marginVertical": 0,
            "position": "absolute",
          }
        }
      />
      <Image
        source={
          Object {
            "uri": "https://carstorageaccount.blob.core.windows.net/images/AbCdE",
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
              "backgroundColor": "transparent",
              "height": undefined,
              "marginLeft": undefined,
              "marginTop": undefined,
              "width": undefined,
            },
          ]
        }
      />
    </View>
  `));

test("renders correctly", async () =>
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
            "backgroundColor": "#0B171B",
            "height": undefined,
            "marginLeft": undefined,
            "marginTop": undefined,
            "width": undefined,
          },
        ]
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontFamily": "Open Sans Bold",
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
