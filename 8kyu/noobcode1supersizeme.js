//noobCode 01: SUPERSIZE ME.... or rather, this integer!

//Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21

function superSize(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map(Number)
      .sort()
      .reverse()
      .join("")
  );
}
