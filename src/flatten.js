

/**
 * flatten - method that flats an array.
 *
 * @return {array}  - a flatten array.
 */
exports.flatten = function flatten(arr) {
  var flat = [];

  // handle array
  function handleArray(a) {
    a.forEach(function(elem) {
      if (Array.isArray(elem)) {
        handleArray(elem);
      } else {
        flat.push(elem);
      }
    });
  }

  handleArray(arr);
  return flat;
};
