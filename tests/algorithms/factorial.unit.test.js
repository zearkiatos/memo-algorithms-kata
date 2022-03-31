import factorialAlgorithms from '../../src/algorithms/factorial';
describe('Unit test suite for Factorial algorithm', () => {
    test('Should execute factorial algorithm', () => {
        const factorialSpyOn = jest.spyOn(factorialAlgorithms, 'factorial');
        const resultExpected = 120;

        const factorialResult = factorialAlgorithms.factorial(5);

        expect(factorialSpyOn).toHaveBeenCalled();
        expect(factorialSpyOn).toHaveBeenNthCalledWith(1, 5);
        expect(factorialResult).toBe(resultExpected);
    });

    test('Should execute factorial algorithm with Memoization feature', () => {
        const factorialSpyOn = jest.spyOn(factorialAlgorithms, 'memoFactorial');
        const resultExpected = 3628800;

        factorialAlgorithms.memoFactorial(5);
        const factorialResult = factorialAlgorithms.memoFactorial(10);


        expect(factorialSpyOn).toHaveBeenCalled();
        expect(factorialSpyOn).toHaveBeenNthCalledWith(2, 10);
        expect(factorialResult).toBe(resultExpected);
    });
});