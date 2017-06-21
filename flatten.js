
/**
 * flatten - method that flats an array.
 *
 * @return {array}  - a flatten array.
 */
exports.flatten = function flatten(arr) {
  var flat = [];

  // handle array
  function handleArray(a) {
    for (var i = 0; i < a.length; i++) {
      var elem = a[i];
      if (!Array.isArray(elem)) {
        flat.push(elem);
      }
      handleArray(elem);
    }
  }
  handleArray(arr);

  return flat;
}

var arr = [[1, 3, 5], [4, 7, 3], [[2, 3], 4]];
// => [1, 3, 5, 4, 7, 3, 2, 3, 4]
var array2 = [
  [
    1,
    3,
    5,
    [
      2,
      3,
      5,
      [
        1,
        0
      ]
    ]
  ],
  [
    4,
    7,
    3
  ],
  [
    [
      2,
       3
     ],
     4
   ]
 ];

console.log(exports.flatten(arr));
console.log(exports.flatten(array2));
