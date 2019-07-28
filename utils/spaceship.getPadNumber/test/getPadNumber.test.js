import getPadNumber from '../index';

test('getPadNumber [2, 3]', () => {
  const expected = '001';
  const result = getPadNumber(3,1);

  expect(result).toEqual(expected);
})
