open Jest;
open Expect;

describe("Double", () => {
  test("value should be doubled", () =>
    5 |> MathUtils.double |> expect |> toEqual(10))
});
