import {describe, expect, it} from "vitest";
import {NumberComparison} from "./numberComparison.ts";

describe('Number Comparison', () => {
    it('should show 2 is greater than 1', () => {
        const numberComparison = new NumberComparison();

        expect(numberComparison.greaterThan(2, 1)).toBeTruthy();
    });

    it('should show the 1 is not greater than 2', () => {
        const numberComparison = new NumberComparison();

        expect(numberComparison.greaterThan(1, 2)).toBeFalsy();
    });
});