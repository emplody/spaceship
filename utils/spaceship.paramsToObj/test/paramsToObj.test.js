import paramsToObj from '../index';

test('delete keyword what is Consonants in Korean and Vowels in Korean.', () => {
  jsdom.reconfigure({
    url: 'https://www.example.com?test=true'
  });
  expect(paramsToObj()).toEqual({ test: 'true' });
});
