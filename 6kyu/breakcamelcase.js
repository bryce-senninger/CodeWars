//Break camelCase

//Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// solution("camelCasing")  ==  "camel Casing"

let solution = string => string.replace(/([A-Z])/g, " $1");
