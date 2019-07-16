function detectBrowser() {
  if (
    (window.navigator.userAgent.indexOf('Opera') ||
      window.navigator.userAgent.indexOf('OPR')) != -1
  ) {
    return 'Opera';
  } else if (window.navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome';
  } else if (window.navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari';
  } else if (window.navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox';
  } else if (
    window.navigator.userAgent.indexOf('MSIE') != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return 'IE';
  } else {
    return 'unknown';
  }
}
export default detectBrowser;
