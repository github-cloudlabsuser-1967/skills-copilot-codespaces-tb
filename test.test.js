// Filename: test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize result to 0', () => {
        expect(calculator.result).toBe(0);
    });

    test('should add a number correctly', () => {
        expect(calculator.add(5)).toBe(5);
        expect(calculator.add(3)).toBe(8);
    });

    test('should subtract a number correctly', () => {
        calculator.add(10); // Set initial value
        expect(calculator.subtract(4)).toBe(6);
        expect(calculator.subtract(2)).toBe(4);
    });

    test('should multiply a number correctly', () => {
        calculator.add(2); // Set initial value
        expect(calculator.multiply(3)).toBe(6);
        expect(calculator.multiply(2)).toBe(12);
    });

    test('should divide a number correctly', () => {
        calculator.add(20); // Set initial value
        expect(calculator.divide(4)).toBe(5);
        expect(calculator.divide(5)).toBe(1);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(0)).toThrow('Cannot divide by zero.');
    });

    test('should reset the result to 0', () => {
        calculator.add(10); // Set initial value
        calculator.reset();
        expect(calculator.result).toBe(0);
    });

    // New test cases
    test('should handle chaining multiple operations', () => {
        calculator.add(10);
        calculator.subtract(2);
        calculator.multiply(3);
        calculator.divide(4);
        expect(calculator.result).toBe(6); // (((10 - 2) * 3) / 4)
    });

    test('should handle negative numbers in operations', () => {
        calculator.add(-5);
        expect(calculator.result).toBe(-5);
        calculator.subtract(-3);
        expect(calculator.result).toBe(-2);
        calculator.multiply(-2);
        expect(calculator.result).toBe(4);
        calculator.divide(-2);
        expect(calculator.result).toBe(-2);
    });

    test('should throw an error for non-numeric inputs', () => {
        expect(() => calculator.add('a')).toThrow('Invalid input');
        expect(() => calculator.subtract(null)).toThrow('Invalid input');
        expect(() => calculator.multiply(undefined)).toThrow('Invalid input');
        expect(() => calculator.divide([])).toThrow('Invalid input');
    });
});