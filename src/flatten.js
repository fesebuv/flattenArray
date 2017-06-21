
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

      if (Array.isArray(elem)) {
        handleArray(elem);
      } else {
        flat.push(elem);
      }
    }
  }
  handleArray(arr);
  return flat;
};
