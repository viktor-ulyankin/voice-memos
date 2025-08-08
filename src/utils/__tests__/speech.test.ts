import { describe, expect, it } from "vitest";
import { formatPunctuation } from "../speech";

describe("formatPunctuation", () => {
  it("replaces spoken punctuation keywords and capitalizes first letter", () => {
    const input = "hello comma world period how are you question mark";
    const output = formatPunctuation(input);
    expect(output).toBe("Hello, world. How are you?");
  });

  it("capitalizes after punctuation and trims leading spaces", () => {
    const input = "  hi period test period another sentence";
    const output = formatPunctuation(input);
    expect(output).toBe("Hi. Test. Another sentence");
  });
});
