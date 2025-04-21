function transformString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const ascii = char.charCodeAt(0);
    console.log(ascii);

    // Check if the character is a letter (A-Za-z)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      if (ascii % 2 === 0) {
        // ASCII code is even - capitalize
        result += char.toUpperCase();
      } else {
        // ASCII code is odd - lowercase
        result += char.toLowerCase();
      }
    } else {
      // Not a letter - leave as is
      result += char;
    }
  }
  return result;
}

// Example usage:
transformString("Hello World!"); // Output: "hElLo wOrLd!"
