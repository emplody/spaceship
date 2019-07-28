import isMobile from '../index';

test('isMobile [MOBILE - true]', () => {
  const mobileAgent = [
    'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_3 like Mac OS X; ko-kr) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16',
    'Mozilla/5.0 (Linux; U; Android 2.1-update1; ko-kr; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
    'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.18302/1114; U; en) Presto/2.4.15',
    'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0'
  ];

  const result = mobileAgent.map(userAgent => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      configurable: true
    });
    
    return isMobile();
  });

  const expected= [
    true,
    true,
    true,
    true
  ]
  expect(result).toEqual(expected);
})

test('isMobile [MOBILE - false]', () => {
  const mobileAgent = [
    'node',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
  ];

  const result = mobileAgent.map(userAgent => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      configurable: true
    });
    
    return isMobile();
  });

  const expected= [
    false,
    false
  ]
  expect(result).toEqual(expected);
})
