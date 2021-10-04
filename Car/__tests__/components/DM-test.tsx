import { DM } from "../../src/components/theme/ThemeProvider";

test("should not transform color", async () => expect(DM("black", false)).toBe("black"));
test("should not transform color", async () => expect(DM("white", false)).toBe("white"));
test("should not transform color", async () => expect(DM("#FFFFFF", false)).toBe("#FFFFFF"));
test("should not transform color", async () => expect(DM("#000000", false)).toBe("#000000"));
test("should not transform color", async () => expect(DM("ABC", false)).toBe("ABC"));
test("should not transform color", async () => expect(DM("light-content", false)).toBe("light-content"));
test("should not transform color", async () => expect(DM("dark-content", false)).toBe("dark-content"));
test("should not transform color", async () => expect(DM("#FAFAFA", false)).toBe("#FAFAFA"));
test("should not transform color", async () => expect(DM("#F0F0F0", false)).toBe("#F0F0F0"));
test("should not transform color", async () => expect(DM("#414045", false)).toBe("#414045"));
test("should not transform color", async () => expect(DM("#F1F1F4", false)).toBe("#F1F1F4"));
test("should not transform color", async () => expect(DM("#00000033", false)).toBe("#00000033"));
test("should not transform color", async () => expect(DM("#909095", false)).toBe("#909095"));

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