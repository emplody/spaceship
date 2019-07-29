import objToParams from '../index';

test('make object to params', () => {
  expect(objToParams({ name: 'abel', age: 23, gender: 'male' })).toEqual(
    'name=abel&age=23&gender=male'
  );
});
