const factorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const memo = [];

function memoFactorial(n) {
	if (n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = n * memoFactorial(n - 1);
	}  
	return memo[n];
}

export default {
  factorial,
  memoFactorial
};
