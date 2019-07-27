function detectBrowser() {
  if (
    window.navigator.userAgent.includes('Opera') ||
    window.navigator.userAgent.includes('OPR')
  ) {
    return 'Opera';
  } else if (window.navigator.userAgent.includes('Chrome')) {
    return 'Chrome';
  } else if (window.navigator.userAgent.includes('Safari')) {
    return 'Safari';
  } else if (window.navigator.userAgent.includes('Firefox')) {
    return 'Firefox';
  } else if (
    window.navigator.userAgent.includes('MSIE') ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return 'IE';
  } else {
    return 'unknown';
  }
}
export default detectBrowser;
