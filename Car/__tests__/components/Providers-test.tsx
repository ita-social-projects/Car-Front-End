import React from "react";
import shallowRender from "react-test-renderer/shallow";
import Providers from "../../src/components/navigation/Providers";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(<Providers />)).toMatchInlineSnapshot(`
    <AuthProvider>
      <Routes />
    </AuthProvider>
  `));
