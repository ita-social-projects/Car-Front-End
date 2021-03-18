import React from "react";
import renderer from "react-test-renderer";
import CarTextInput from "../../src/components/car-text-input/CarTextInput";

test("renders correctly", () =>
  expect(<CarTextInput />).toBeDefined());