//Help Bob count letters and digits.

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
  let count = 0;
  for (i = 0; i < input.length; i++) {
    let regex = /[a-zA-Z0-9]/g;
    if (regex.test(input[i]) == true) {
      count++;
    }
  }
  return count;
}
