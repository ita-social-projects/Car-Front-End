import React from "react";
import renderer from "react-test-renderer";
import TouchableMapBar from "../../src/components/touchable-map-bar/TouchableMapBar";

test("renders correctly", () =>
  expect(<TouchableMapBar />).toBeDefined());