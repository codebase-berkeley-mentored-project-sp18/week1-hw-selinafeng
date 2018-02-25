/*
Question 3 - JavaScript Objects
================================
JavaScript is not an object-oriented language. Despite that, it does have "objects"
that are more similar to dictionaries in Python and should be thought of as such.

The following function takes in a non-null object that may contain other objects.
It should return the maximum depth to which objects are nested.

Example:
>>> getObjectNestingDepth({})
--> 1
>>> getObjectNestingDepth({ "key1": 1, "key2": 2 })
--> 1
>>> getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    })
--> 3
*/

function getObjectNestingDepth(inputObject) {
  var maxDepth = 1;
  for (var key in inputObject) {
    maxDepth = 0;
    var depth = 0;
    if (!(inputObject[key] && typeof inputObject[key] === 'object' && inputObject[key].constructor === Object)) {
      depth = 1;
    }
    else {
      depth = 1 + getObjectNestingDepth(inputObject[key]);
    }
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  }
  return maxDepth;
}
