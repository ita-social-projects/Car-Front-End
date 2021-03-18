import React from "react";
import renderer from "react-test-renderer";
import JourneyNewApplicant from "../../src/components/journey-new-applicant/JourneyNewApplicant";

test("renders correctly", () =>
  expect(<JourneyNewApplicant />).toBeDefined());