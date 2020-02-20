//Pyramid Slide Down

// Lyrics...

// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3

// Here comes the task...

// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' largest 'slide down'. For example,

// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23

// By the way...

// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let x = 0; x < pyramid.length; x++) {
      pyramid[i][x] += Math.max(pyramid[i + 1][x], pyramid[i + 1][x + 1]);
    }
  }
  return pyramid[0][0];
}

// function longestSlideDown(pyramid) {
//   let tempIndex = 0;
//   let nums = [];
//   nums.push(pyramid[0][0]); //starting off by adding first layer of pyramid to sum array
//   for (i = 1; i < pyramid.length; i++) {
//     //looping through each array in the pyramid array starting at index 1
//     if (pyramid[i][tempIndex] > pyramid[i][tempIndex + 1]) {
//       //if pyramid number at tempIndex is more than pyramid number at next index
//       nums.push(pyramid[i][tempIndex]); //add that number to sum array
//     } else {
//       tempIndex++; //otherwise, increment temp index
//       nums.push(pyramid[i][tempIndex]); //then push the number at the new temp index to sums array
//     }
//   }
//   return nums.reduce((a, b) => a + b, 0); //sum all numbers from created array and return
// }
