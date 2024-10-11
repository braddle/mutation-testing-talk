package net.markBradley.bug;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NumberComparisonTest {

    @Test
    void oneIsLessThanTwo() {
        NumberComparison numberComparison = new NumberComparison();

        assertTrue(numberComparison.lessThan(1,2));
    }

    @Test
    void TwoNotIsLessThanTwo() {
        NumberComparison numberComparison = new NumberComparison();

        assertFalse(numberComparison.lessThan(2,2));
    }
}