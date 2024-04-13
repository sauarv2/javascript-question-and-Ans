/*

When importing objects from a module in Python, the syntax usually is as follows:

from module_name import object
Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

Examples
fixImport("import object from module_name") ➞ "from module_name import object"

fixImport("import randint from random") ➞ "from random import randint"

fixImport("import pi from math") ➞ "from math import pi"


*/

function fixImport(op) {
  let splt = op.split(" ");

  let makfix = splt[2] + " " + splt[3] + " " + splt[0] + " " + splt[1];

  return makfix;
}
console.log(fixImport("import object from module_name"));
// ➞ "from module_name import object"
console.log(fixImport("import randint from random"));
//➞ "from random import randint"
console.log(fixImport("import pi from math"));
//➞ "from math import pi"
