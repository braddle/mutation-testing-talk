import {describe, expect, it} from "vitest";
import {NumberComparison} from "./numberComparison.ts";

describe('Number Comparison', () => {

    it('should show that 1 is less than 2', () => {
        const numberComparison = new NumberComparison();

        expect(numberComparison.lessThan(1,2)).toBeTruthy();
    });

    it('should show that 2 in not less than 2', () => {
        const numberComparison = new NumberComparison();

        expect(numberComparison.lessThan(2,2)).toBeFalsy();
    });
});