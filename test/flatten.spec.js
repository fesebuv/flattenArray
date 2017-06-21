var expect = require('chai').expect;
var flatten = require('../src/flatten').flatten;


var arr1 = [[1, 3, 5], [4, 7, 3], [[2, 3], 4]];
var flat_arr1 = [1, 3, 5, 4, 7, 3, 2, 3, 4];
var fruits = [
  ['lemon', 'lime'],
  ['blueberry', 'cranberry', 'strawberry'],
  ['apple', 'pear']
];

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

var flat_array2 = [1, 3, 5, 2, 3, 5, 1, 0, 4, 7, 3, 2, 3, 4];
var flat_fruits = ['lemon', 'lime','blueberry', 'cranberry', 'strawberry','apple', 'pear'];

describe('`flatten` method tests', function () {

  it('should flatten an array', function () {
    expect(flatten(arr1)).to.deep.equal(flat_arr1);
  });

  it('should flatten another array', function () {
    expect(flatten(array2)).to.deep.equal(flat_array2);
  });

  it('should flatten fruits array', function () {
    expect(flatten(fruits)).to.deep.equal(flat_fruits);
  });
});
