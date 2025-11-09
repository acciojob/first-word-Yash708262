function firstWord(s) {
  // your code here
  s = s.trimStart();

  // If the string is empty, return it directly
  if (s === "") return "";

  // Find the index of the first space
  const spaceIndex = s.indexOf(" ");

  // If there is no space, return the whole string
  if (spaceIndex === -1) return s;

  // Otherwise, return everything before the first space
  return s.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

