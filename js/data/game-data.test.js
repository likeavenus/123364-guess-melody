import assert from 'assert';

describe(`Массив`, () => {
  describe(`#indexOf()`, () => {
    it(`Возвращает -1, если в массиве нет искомого значения`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
