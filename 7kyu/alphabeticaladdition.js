//Alphabetical Addition

// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     If no letters are given, the function should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// Confused? Roll your mouse/tap over here

function addLetters(...letters) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let numbers = [];
  for (i = 0; i < letters.length; i++) {
    for (x = 0; x < alphabet.length; x++) {
      if (letters[i] == alphabet[x]) {
        numbers.push(x + 1);
      }
    }
  }
  let indexMoves = numbers.reduce((a, b) => a + b, 0);
  if (indexMoves >= 26) {
    indexMoves = indexMoves % 26;
  }
  if (indexMoves == 0) {
    return "z";
  } else {
    return letters.length > 0 ? alphabet[indexMoves - 1] : "z";
  }
}
