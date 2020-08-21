const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("success(item)", () => {
    it("should increase item enhancement by 1, only if item is < 20", () => {
      expect(
        enhancer.success({ name: "helmet", durability: 100, enhancement: 10 })
      ).toEqual({ name: "helmet", durability: 100, enhancement: 11 });

      expect(
        enhancer.success({ name: "helmet", durability: 100, enhancement: 20 })
      ).toEqual({ name: "helmet", durability: 100, enhancement: 20 });

      expect(
        enhancer.success({ name: "helmet", durability: 69, enhancement: 18 })
      ).toEqual({ name: "helmet", durability: 69, enhancement: 19 });
    });
  });

  describe("fail(item)", () => {
    it("decreases durability by 5 (if enhancement level < 15) & decreases durability by 10 (if enh lv >= 15) & decreases enh lv by 1 (if enh lv > 16)", () => {
      expect(
        enhancer.fail({ name: "sword", durability: 50, enhancement: 0 })
      ).toEqual({ name: "sword", durability: 45, enhancement: 0 });

      expect(
        enhancer.fail({ name: "sword", durability: 50, enhancement: 15 })
      ).toEqual({ name: "sword", durability: 40, enhancement: 15 });

      expect(
        enhancer.fail({ name: "sword", durability: 50, enhancement: 17 })
      ).toEqual({ name: "sword", durability: 40, enhancement: 16 });
    });
  });

  describe("repair(item)", () => {
    it("returns new item with durability restored to 100", () => {
      expect(
        enhancer.repair({ name: "armor", durability: 50, enhancement: 0 })
      ).toEqual({ name: "armor", durability: 100, enhancement: 0 });
    });
  });

  describe("get()", () => {
    // stretch
  });
});
