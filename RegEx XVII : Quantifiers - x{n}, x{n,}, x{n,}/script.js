"use strict";
/* RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}

Quantifiers indicate numbers of characters or expressions to match.

x{n}

Where n is a positive integer, matches exactly n occurrences of the preceding item x.

"candy".match(/a{2}/) ➞ null
"caandy".match(/a{2}/) ➞ "aa"

x{n,}

Where n is a positive integer, matches at least n occurrences of the preceding item x.

"candy".match(/a{2,}/) ➞ null
"caandy".match(/a{2,}/) ➞ "aa"
"caaaaaandy".match(/a{2,}/) ➞ "aaaaaa"

x{n,m}

Where n is 0 or a positive integer, m is a positive integer, and m > n, matches at least n and at most m occurrences of the preceding item x.

"cndy".match(/a{1,3}/) ➞ null
"candy".match(/a{1,3}/) ➞ "a"
"caandy".match(/a{1,3}/) ➞ "aa"
"caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"

*/

function findEllipsis(str) {
  const regex = /([.]{1,3})/;
  return str.match(regex).join(" ");
}

const pp = findEllipsis("Hello!... Wait. How goes?..... GoodBye!..");

console.log(pp);
