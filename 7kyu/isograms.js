//Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  let strSort = str
    .toLowerCase()
    .split("")
    .sort();
  for (i = 0; i < strSort.length; i++) {
    if (strSort[i] == strSort[i + 1]) {
      return false;
    }
  }
  return true;
}
