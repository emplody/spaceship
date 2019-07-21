import paramsToObj from '../index';

test('make param to obj', () => {
  jsdom.reconfigure({
    url: 'https://www.example.com?test=true'
  });
  expect(paramsToObj()).toEqual({ test: 'true' });
});
