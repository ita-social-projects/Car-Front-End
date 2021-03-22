import React from "react";
import * as navigation from "../../src/components/navigation/Navigation";

test("shoud be correct", async () =>
    expect(JSON.stringify(navigation.navigationRef)).toBe(JSON.stringify(React.createRef<any>())));

test("shoud be correct", async () =>
    expect(navigation.navigate("ABC")).toBe(navigation.navigationRef.current?.navigate("ABC")));

test("shoud be correct", async () =>
    expect(navigation.goBack()).toBe(navigation.navigationRef.current?.goBack()));