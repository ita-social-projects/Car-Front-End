import DM from "../../src/components/styles/DM";

test("should not transform color", async () => expect(DM("black")).toBe("black"));
test("should not transform color", async () => expect(DM("white")).toBe("white"));
test("should not transform color", async () => expect(DM("#FFFFFF")).toBe("#FFFFFF"));
test("should not transform color", async () => expect(DM("#000000")).toBe("#000000"));
test("should not transform color", async () => expect(DM("ABC")).toBe("ABC"));
test("should not transform color", async () => expect(DM("light-content")).toBe("light-content"));
test("should not transform color", async () => expect(DM("dark-content")).toBe("dark-content"));
test("should not transform color", async () => expect(DM("#FAFAFA")).toBe("#FAFAFA"));
test("should not transform color", async () => expect(DM("#F0F0F0")).toBe("#F0F0F0"));
test("should not transform color", async () => expect(DM("#414045")).toBe("#414045"));
test("should not transform color", async () => expect(DM("#F1F1F4")).toBe("#F1F1F4"));
test("should not transform color", async () => expect(DM("#00000033")).toBe("#00000033"));
test("should not transform color", async () => expect(DM("#909095")).toBe("#909095"));

test("should not transform color", async () => expect(DM("ABC", true)).toBe("ABC"));
test("should transform color", async () => expect(DM("#121212", false)).toBe("#FFFFFF"));

test("should transform color", async () => expect(DM("#121212", false)).toBe("#FFFFFF"));

test("should transform color", async () => expect(DM("black", true)).toBe("#EBEBEB"));
test("should transform color", async () => expect(DM("white", true)).toBe("#1C1C1C"));
test("should transform color", async () => expect(DM("#FFFFFF", true)).toBe("#1C1C1C"));
test("should transform color", async () => expect(DM("#000000", true)).toBe("#EBEBEB"));
test("should transform color", async () => expect(DM("light-content", true)).toBe("dark-content"));
test("should transform color", async () => expect(DM("dark-content", true)).toBe("light-content"));
test("should transform color", async () => expect(DM("#FAFAFA", true)).toBe("#191919"));
test("should transform color", async () => expect(DM("#F0F0F0", true)).toBe("#232323"));
test("should transform color", async () => expect(DM("#414045", true)).toBe("#BEBFBA"));
test("should transform color", async () => expect(DM("#F1F1F4", true)).toBe("#7678BE"));
test("should transform color", async () => expect(DM("#00000033", true)).toBe("#EBEBEB33"));
test("should transform color", async () => expect(DM("#909095", true)).toBe("#6F6F6A"));