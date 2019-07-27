function normalizeKeyword(keyword = '') {
  const ignoreCharRegex = new RegExp('[ㄱ-ㅎㅏ-ㅣ.?&=]', 'gm');
  const normalizedKeyword = keyword
    .replace(ignoreCharRegex, '')
    .replace(new RegExp('/s+/', 'gm'), ' ');

  return normalizedKeyword.trim();
}

export default normalizeKeyword;
