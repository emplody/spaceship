import detectBrowser from '../index';

test('detect Browser', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: 'Chrome',
    configurable: true
  });
  expect(detectBrowser()).toBe('Chrome');
});

test('detect which is not browser', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: 'node',
    configurable: true
  });
  expect(detectBrowser()).toBe('unknown');
});
