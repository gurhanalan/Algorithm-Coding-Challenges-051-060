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
