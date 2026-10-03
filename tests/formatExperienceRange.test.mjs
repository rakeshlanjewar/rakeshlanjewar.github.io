import test from "node:test";
import assert from "node:assert/strict";
import { formatExperienceRange } from "../src/utils/formatExperienceRange.js";

test("uses the display label for a current role", () => {
  assert.equal(
    formatExperienceRange("2024-07", "Present", "Current"),
    "Jul 2024 — Current",
  );
});

test("formats a completed role using its start and end dates", () => {
  assert.equal(
    formatExperienceRange("2023-06", "2024-06"),
    "Jun 2023 — Jun 2024",
  );
});
