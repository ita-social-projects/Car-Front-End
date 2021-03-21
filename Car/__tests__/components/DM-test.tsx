import DM from "../../src/components/styles/DM";

test("should not transform color", () => expect(DM("black")).toBe("black"));
test("should not transform color", () => expect(DM("white")).toBe("white"));
test("should not transform color", () => expect(DM("#FFFFFF")).toBe("#FFFFFF"));
test("should not transform color", () => expect(DM("#000000")).toBe("#000000"));
test("should not transform color", () => expect(DM("ABC")).toBe("ABC"));
test("should not transform color", () => expect(DM("light-content")).toBe("light-content"));
test("should not transform color", () => expect(DM("dark-content")).toBe("dark-content"));
test("should not transform color", () => expect(DM("#FAFAFA")).toBe("#FAFAFA"));
test("should not transform color", () => expect(DM("#F0F0F0")).toBe("#F0F0F0"));
test("should not transform color", () => expect(DM("#414045")).toBe("#414045"));

test("should not transform color", () => expect(DM("ABC", true)).toBe("ABC"));

test("should transform color", () => expect(DM("black", true)).toBe("#EBEBEB"));
test("should transform color", () => expect(DM("white", true)).toBe("#141414"));
test("should transform color", () => expect(DM("#FFFFFF", true)).toBe("#141414"));
test("should transform color", () => expect(DM("#000000", true)).toBe("#EBEBEB"));
test("should transform color", () => expect(DM("light-content", true)).toBe("dark-content"));
test("should transform color", () => expect(DM("dark-content", true)).toBe("light-content"));
test("should transform color", () => expect(DM("#FAFAFA", true)).toBe("#191919"));
test("should transform color", () => expect(DM("#F0F0F0", true)).toBe("#232323"));
test("should transform color", () => expect(DM("#414045", true)).toBe("#BEBFBA"));