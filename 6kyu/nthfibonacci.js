//N-th Fibonacci

// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2

// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
  return Math.round(
    (Math.pow(1.6180339, n - 1) - Math.pow(-0.6180339, n - 1)) / 2.236067977
  );
}

//Another great solution

function nthFibo(n) {
  var cache = [0, 0, 1, 1];
  while (cache.length <= n) {
    cache[cache.length] = cache[cache.length - 1] + cache[cache.length - 2];
  }
  return cache[n];
}
