import React from "react";
import renderer from "react-test-renderer";
import Circle from "../../src/components/styles/Circle";

test("renders correctly", async () =>
    expect(
        renderer.create(
            <Circle
                color={"#FFFFFF"}
                radius="1.3rem"
                base={true}
                marginTop={"0.3rem"}
            />
        ).toJSON()
    ).toMatchInlineSnapshot(`
    <View
      style={
        Array [
          undefined,
          undefined,
        ]
      }
    />
  `));
