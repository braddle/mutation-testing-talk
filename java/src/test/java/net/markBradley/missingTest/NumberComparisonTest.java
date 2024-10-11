package net.markBradley.missingTest;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NumberComparisonTest {

    @Test
    void twoIsGreaterThanOne() {
        NumberComparison numberComparison = new NumberComparison();

        assertTrue(numberComparison.greaterThan(2,1));
    }

    @Test
    void oneNotIsGreaterThanTwo() {
        NumberComparison numberComparison = new NumberComparison();

        assertFalse(numberComparison.greaterThan(1,2));
    }
}