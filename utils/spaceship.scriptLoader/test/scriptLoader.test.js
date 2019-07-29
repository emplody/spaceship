import scriptLoader from '../index';

test('Load the script', () => {
  const MockBrowser = require('mock-browser').mocks.MockBrowser;
  global.document = new MockBrowser().getDocument();

  scriptLoader('https://unpkg.com/react@16/umd/react.development.js').then(
    res => expect(res).toBe('Successful script loading')
  );
});
