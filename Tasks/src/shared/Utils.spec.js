import { generateId } from "./Utils";

it("returns a nonempty id", () => {
  const result = generateId();
  expect(result).toMatch(/[0-9a-f]+/i);
});

it("returns different values on subsequent calls", () => {
  const first = generateId();
  const second = generateId();
  expect(first).not.toEqual(second);
});
