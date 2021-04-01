import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import CreateJourney from "../../../src/activity/journey/journey-activity/create-journey/CreateJourney";

const renderer = shallowRenderer.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<CreateJourney />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "flex": 1,
        }
      }
    >
      <ForwardRef
        flex={1}
        isConfirmed={false}
        placeholder="From"
      />
      <React.Fragment />
      <ForwardRef
        onPress={[Function]}
        style={
          Array [
            Object {
              "alignItems": "center",
              "backgroundColor": "#000000",
              "flexDirection": "row",
              "justifyContent": "space-around",
              "left": 629,
              "paddingHorizontal": 16,
              "paddingVertical": 14,
              "position": "absolute",
              "top": 1098,
            },
            Object {
              "backgroundColor": "black",
            },
          ]
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
              Object {
                "color": "white",
              },
            ]
          }
        >
          Confirm
        </Text>
      </ForwardRef>
    </View>
  `));
