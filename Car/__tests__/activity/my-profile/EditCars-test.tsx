import React from "react";
import shallowRender from "react-test-renderer/shallow";
import EditCars from "../../../src/activity/my-profile/my-profile-activity/cars/car-activity/edit-cars/EditCars";

const renderer = shallowRender.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));

test("renders correctly", async () =>
    expect(renderer.render(<EditCars route={{ params: { carId: 1 } }} />))
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "flex": 1,
          },
          Object {
            "backgroundColor": "white",
          },
        ]
      }
    >
      <Indicator
        color="#414045"
        size="large"
        text="Loading information..."
      />
    </View>
  `));
