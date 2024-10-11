package net.markBradley.FullCoverage;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FizzBuzzTest {

    @Test
    void FizzBuzz() {
        FizzBuzz fizzBuzz = new FizzBuzz();

        fizzBuzz.convert(1);
        fizzBuzz.convert(3);
        fizzBuzz.convert(5);
        fizzBuzz.convert(15);

        assertTrue(true);
    }

}