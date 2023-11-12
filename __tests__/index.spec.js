import test from "ava";
import { sum } from '../index.cjs'

test("sum from native", async (t) => {
  t.is(sum(1, 2), 3);
});
