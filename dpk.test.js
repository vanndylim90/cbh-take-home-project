const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Return the given partition key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "hello" });
    expect(trivialKey).toBe("hello");
  });

  it("Return the given partition key", () => {
    const trivialKey = deterministicPartitionKey({ testKey: "hello" });
    console.log(trivialKey);
    expect(trivialKey).toBeDefined();
  });
});
