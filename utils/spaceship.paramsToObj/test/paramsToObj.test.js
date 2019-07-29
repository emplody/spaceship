import paramsToObj from '../index';

test('make param to obj', () => {
  jsdom.reconfigure({
    url: 'https://www.example.com?test=true'
  });
  expect(paramsToObj()).toEqual({ test: 'true' });
});

test('make param to obj - empty string', () => {
  jsdom.reconfigure({
    url: 'https://www.example.com'
  });
  expect(paramsToObj()).toEqual({});
});
