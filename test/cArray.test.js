const CArray = require('../cArray');

it('CArray', () => {
  const nums = new CArray(100);
  nums.setData();
  console.log(nums.toString());
});