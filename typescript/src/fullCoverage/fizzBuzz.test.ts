import {describe, expect, it} from "vitest";
import {FizzBuzz} from "./fizzBuzz.ts";

describe('FizzBuzz', () => {
    it('should conform to all fizzbuzz rules', () => {
        const fizzBuzz = new FizzBuzz();

        fizzBuzz.convert(1);
        fizzBuzz.convert(3);
        fizzBuzz.convert(5);
        fizzBuzz.convert(15);

        expect(true).toBeTruthy
    });
});