import {sum} from "../src";

describe("sum", () => {
    test("returns object with sum", () => {
        const result = sum(4, 5);

        expect(result.sum).toBe(9);
    })
})