import normalizeKeyword from '../index';

test('delete keyword what is Consonants in Korean and Vowels in Korean.', () => {
  const cases = [
    { keyword: '미국ㄱ', expected: '미국' },
    { keyword: 'ㄴ네이버ㅓ', expected: '네이버' },
    { keyword: '오타ㅏㅑ', expected: '오타' }
  ];

  cases.forEach(({ keyword, expected }) => {
    expect(normalizeKeyword(keyword)).toBe(expected);
  });
});
