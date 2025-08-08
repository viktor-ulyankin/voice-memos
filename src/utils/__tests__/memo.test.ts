import { describe, expect, it } from "vitest";
import { memoTransformers } from "../memo";
import type { Memo } from "../../types/domain";

describe("memoTransformers", () => {
  it("serializes Date fields to ISO strings", () => {
    const now = new Date("2025-07-30T16:23:00.000Z");
    const memo: Memo = {
      id: "id-1",
      createdAt: now,
      updatedAt: now,
      body: "text",
    };

    const dto = memoTransformers.serialize(memo);
    expect(dto.createdAt).toBe("2025-07-30T16:23:00.000Z");
    expect(dto.updatedAt).toBe("2025-07-30T16:23:00.000Z");
  });

  it("deserializes ISO strings back to Date", () => {
    const dto = {
      id: "id-2",
      createdAt: "2025-07-29T10:00:00.000Z",
      updatedAt: "2025-07-29T12:00:00.000Z",
      body: "abc",
    };

    const memo = memoTransformers.deserialize(dto);
    expect(memo.createdAt).toBeInstanceOf(Date);
    expect(memo.updatedAt).toBeInstanceOf(Date);
    expect(memo.createdAt.toISOString()).toBe(dto.createdAt);
    expect(memo.updatedAt.toISOString()).toBe(dto.updatedAt);
  });
});
