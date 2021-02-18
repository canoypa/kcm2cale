import { classNames } from ".";

describe("Util:classnames", () => {
  describe("string", () => {
    it("alone", () => {
      const cn = classNames("foo");
      expect(cn).toBe("foo");
    });
    it("multi", () => {
      const cn = classNames("foo", "bar");
      expect(cn).toBe("foo bar");
    });
  });

  describe("object", () => {
    it("all false", () => {
      const cn = classNames({ foo: false, bar: false });
      expect(cn).toBe("");
    });

    it("one true", () => {
      const cn = classNames({ foo: true, bar: false });
      expect(cn).toBe("foo");
    });

    it("all true", () => {
      const cn = classNames({ foo: true, bar: true });
      expect(cn).toBe("foo bar");
    });
  });

  describe("mixed", () => {
    it("all false", () => {
      const cn = classNames("foo", "bar", { baz: false, qux: false });
      expect(cn).toBe("foo bar");
    });

    it("one true", () => {
      const cn = classNames("foo", "bar", { baz: true, qux: false });
      expect(cn).toBe("foo bar baz");
    });

    it("all true", () => {
      const cn = classNames("foo", "bar", { baz: true, qux: true });
      expect(cn).toBe("foo bar baz qux");
    });
  });
});
