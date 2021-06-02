import waitFor from "../waitFor";

const result = () => new Promise(r => setTimeout(() => r("hi"), 250));

describe("Wait For", () => {
  it("the expectation fails after 1000ms", async () => {
    try {
      await waitFor(() => {
        expect("hello").toEqual("goodbye");
      });
    } catch (error) {
      const errorString = error.message
        .replace(/[\n\r]+/g, " ")
        .replace(/\u001b\[.*?m/g, "")
        .replace(/['"]/g, "");

      expect(errorString).toEqual(
        "expect(received).toEqual(expected) // deep equality Expected: goodbye Received: hello"
      );
    }
  });

  it("the expectation succeeds before 1000ms", async () => {
    await waitFor(async () => {
      expect(await result()).toEqual("hi");
    });
  });
});
