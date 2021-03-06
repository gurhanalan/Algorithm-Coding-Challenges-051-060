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

//////////////////////////////////////////////
// 53. Dubstep - 6kyu - codewars
/* 
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND */

function songDecoder(song) {
    return song.replace(/(WUB)+/g, " ").trim();
}
console.log(songDecoder("AWUBWUBWUBBWUBCWUB"));

//////////////////////////////////////////
// 54. REGEX "Extract the word 'coding' from this string."
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
console.log(testRegex.test(testStr)); //true

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);
//["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 55. IQ Test - codewars - 6kyu
/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob ??? to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd */

function iqTest(numbers) {
    const num = numbers.split(" ");
    const even = numbers.split(" ").filter((el) => el % 2 === 0);
    const odd = numbers.split(" ").filter((el) => el % 2 === 1);

    if (even.length === 1) return num.indexOf(even[0]) + 1;
    if (odd.length === 1) return num.indexOf(odd[0]) + 1;
}
console.log(iqTest("1 2 1 1"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 56. Format a string of names like 'Bart, Lisa & Maggie'. - codewars - 6kyu

/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'. */

function list(names) {
    const length = names.length;
    if (length === 0) return "";
    if (length === 1) return names[0]["name"];
    if (length === 2) return `${names[0]["name"]} & ${names[1]["name"]}`;
    if (length >= 3) {
        let text = "";
        for (let i = 0; i <= length - 3; i++) {
            text += names[i]["name"] + ", ";
        }

        text += `${names[length - 2]["name"]} & ${names[length - 1]["name"]}`;
        return text;
    }
}
let result2 = list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
console.log(result2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 57. Unique In Order - codewars - 6kyu
/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

const uniqueInOrder2 = function (iterable) {
    let arr = typeof iterable === "string" ? iterable.split("") : iterable;

    return arr.filter((curr, i, arr) => {
        if (curr !== arr[i + 1]) return curr;
    });
};

const uniqueInOrder3 = function (iterable) {
    return [...iterable].filter((curr, i, arr) => curr !== arr[i + 1]);
};

const uniqueInOrder4 = function (it) {
    let arr1 = [];
    return [...it].reduce((acc, curr, i, arr) => {
        if (curr !== arr[i + 1]) acc.push(curr);
        return acc;
    }, []);
};

console.log(uniqueInOrder4("AAAABBBCCDAABBB"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 58. Find the unique number - codewars - 6kyu
/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It???s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */
function findUniq(arr) {
    let same = arr[0] === arr[1] ? arr[0] : arr[0] === arr[2] ? arr[0] : arr[1];
    for (let num of arr) {
        if (num !== same) return num;
    }
}
console.log(findUniq([0, 0, 0.55, 0, 0]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 59. Build Tower - codewars - 6kyu
/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
 */
function towerBuilder(n) {
    const array = [];

    for (let i = 0; i < n; i++) {
        array.push(
            "*"
                .repeat(1 + 2 * i)
                .padEnd(n + i, " ")
                .padStart(2 * n - 1, " ")
        );
    }
    return array;
}

console.log(towerBuilder(5));

//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #############################################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 60. Are they the "same"? - codewars - 6 kyu

/* 
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
 */
function comp(array1, array2) {
    if (!array2) return false;
    if (!array1) return false;
    const sortedSqr = array2.map((num) => Math.sqrt(num)).sort((a, b) => a - b);
    const sortedArr1 = array1.sort((a, b) => a - b);
    console.log(sortedSqr);
    console.log(sortedArr1);
    for (let i = 0; i < sortedSqr.length; i++) {
        if (sortedSqr[i] !== sortedArr1[i]) return false;
    }
    return true;
}
console.log(
    comp(
        [5, 1, 4, 0, 3, 4, 3, 2, 5, 8, 1, 10],
        [100, 16, 1, 1, 16, 4, 1, 9, 64, 25, 25, 9]
    )
);
