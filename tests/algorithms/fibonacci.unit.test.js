import fibonacciAlgorithms from '../../src/algorithms/fibonacci';
describe('Unit test suite for Fibonacci algorithm', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })
    test('Should execute fibonacci algorithm', () => {
        const fibonacciSpyOn = jest.spyOn(fibonacciAlgorithms, 'fibonacci');
        const resultExpected = 5;

        const fibonacciResult = fibonacciAlgorithms.fibonacci(4);

        expect(fibonacciSpyOn).toHaveBeenCalled();
        expect(fibonacciSpyOn).toHaveBeenNthCalledWith(1, 4);
        expect(fibonacciResult).toBe(resultExpected);
    });

    test('Should execute fibonacci algorithm with memoization feature', () => {
        const fibonacciSpyOn = jest.spyOn(fibonacciAlgorithms, 'fibonacci');
        const resultExpected = 10946;

        fibonacciAlgorithms.fibonacci(4);
        const fibonacciResult = fibonacciAlgorithms.fibonacci(20);

        expect(fibonacciSpyOn).toHaveBeenCalled();
        expect(fibonacciSpyOn).toHaveBeenNthCalledWith(2, 20);
        expect(fibonacciResult).toBe(resultExpected);
    });
});