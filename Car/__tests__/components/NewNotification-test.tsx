import React from "react";
import renderer from "react-test-renderer";
import NewNotification from "../../src/components/new-notification/NewNotification";

test("renders correctly", () =>
  expect(<NewNotification />).toBeDefined());