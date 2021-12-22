"use strict";

// 51. N-th Fibonacci - 6kyu
/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. */

function nthFibo(n) {
    let current = 0;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(current);
        current = (arr[arr.length - 1] || 1) + (arr[arr.length - 2] || 0);
    }
    return arr.pop();
}

// 52. Sum of positive - codewars - 8kyu
/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
    return arr.reduce((acc, num) => {
        if (num < 0) return 0 + acc;
        else return acc + num;
    }, 0);
}
console.log(positiveSum([-1, 2, 3, 4, -5]));
