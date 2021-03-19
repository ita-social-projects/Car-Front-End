import React from "react";
import renderer from "react-test-renderer";
import JourneyCardList from "../../src/components/journey-card/JourneyCardList";

test("renders correctly", () =>
  expect(
    renderer.create(<JourneyCardList journey={[]} />).toJSON()
  ).toMatchInlineSnapshot(`<View />`));
