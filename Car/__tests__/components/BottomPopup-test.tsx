import React from "react";
import { View } from "react-native";
import shallowRender from "react-test-renderer/shallow";
import BottomPopup from "../../src/components/bottom-popup/BottomPopup";

const renderer = shallowRender.createRenderer();

jest.mock("reanimated-bottom-sheet", () => {});
jest.useFakeTimers();

test("renders correctly", async () =>
    expect(renderer.render(<BottomPopup />)).toMatchInlineSnapshot(`
    <UNDEFINED
      renderContent={[Function]}
      renderHeader={[Function]}
    />
  `));

test("renders correctly", async () =>
    expect(renderer.render(<BottomPopup
        renderHeader={<View/>}
        renderContent={<View />}
    />)).toMatchInlineSnapshot(`
    <UNDEFINED
      renderContent={[Function]}
      renderHeader={[Function]}
    />
  `));
