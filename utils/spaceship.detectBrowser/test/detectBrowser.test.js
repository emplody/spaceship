import detectBrowser from '../index';

test('detect Browser', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/10.0.2 Safari/602.3.12',
    configurable: true
  });
  expect(detectBrowser()).toBe('Safari');
});

test('detect which is not browser', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: 'node',
    configurable: true
  });
  expect(detectBrowser()).toBe('unknown');
});
