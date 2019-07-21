function detectBrowser() {
  if (
    window.navigator.userAgent.indexOf('Opera') ||
    !!window.navigator.userAgent.indexOf('OPR')
  ) {
    return 'Opera';
  } else if (!!window.navigator.userAgent.indexOf('Chrome')) {
    return 'Chrome';
  } else if (!!window.navigator.userAgent.indexOf('Safari')) {
    return 'Safari';
  } else if (!!window.navigator.userAgent.indexOf('Firefox')) {
    return 'Firefox';
  } else if (
    !!window.navigator.userAgent.indexOf('MSIE') ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return 'IE';
  } else {
    return 'unknown';
  }
}
export default detectBrowser;
