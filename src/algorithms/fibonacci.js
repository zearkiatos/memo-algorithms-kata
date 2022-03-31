const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const memo = [];

function memoFibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
	}  
	return memo[n];
}

export default {
  fibonacci,
  memoFibonacci
};
