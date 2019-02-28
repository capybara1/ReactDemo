import { mapToRepresentationModel } from "./converters";
import { TODAY } from "./Utils";

it("mapToRepresentationModel converts simple task properly", () => {
  const result = mapToRepresentationModel({
    id: "1",
    label: "test",
    due: TODAY
  });
  expect(result).toEqual({ label: "test" });
});

it("mapToRepresentationModel converts task with special due properly", () => {
  const result = mapToRepresentationModel({
    id: "1",
    label: "test",
    due: "another day"
  });
  expect(result).toEqual({ label: "test", due: "another day" });
});
