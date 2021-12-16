import { Stack } from "./stack";

describe("stack", () => {
  let instance;

  beforeEach(() => {
    instance = new Stack(10);
  });

  it("should push an item at the top of the stack", () => {
    instance.stackPush("foo");

    expect(instance.stackPush("bar")).toEqual("bar");
  });

  it("should returns the total number of items in the stack", () => {
    instance.stackPush("foo");
    instance.stackPush("bar");

    expect(instance.stackSize()).toBe(2);
  });

  it("should return the item at the top of the stack without removing it.", () => {
    instance.stackPush("foo");

    expect(instance.stackPeek()).toBe("foo");
    expect(instance.stackSize()).toBe(1);

    instance.stackPush("bar");
    expect(instance.stackPeek()).toBe("bar");
    expect(instance.stackSize()).toBe(2);
  });

  it("should remove and return the item from the top of the stack", () => {
    instance.stackPush("foo");
    instance.stackPush("bar");

    expect(instance.stackPop()).toBe("bar");
    expect(instance.stackPeek()).toBe("foo");
  });

  it("checks whether the stack is full.", () => {
    for (let i = 0; i < 10; i++) {
      instance.stackPush("foo");
    }
    expect(instance.stackIsFull()).toBe(true);
  });

  it("checks whether the stack is empty", () => {
    expect(instance.stackIsEmpty()).toBe(true);
    instance.stackPush("foo");
    expect(instance.stackIsEmpty()).toBe(false);
  });
});
