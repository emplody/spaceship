function detectBrowser() {
  if (
    window.navigator.userAgent.match(/Opera/i) ||
    window.navigator.userAgent.match(/OPR/i)
  ) {
    return 'Opera';
  } else if (window.navigator.userAgent.match(/Chrome/i)) {
    return 'Chrome';
  } else if (window.navigator.userAgent.match(/Safari/i)) {
    return 'Safari';
  } else if (window.navigator.userAgent.match(/Firefox/i)) {
    return 'Firefox';
  } else if (
    window.navigator.userAgent.match(/MSIE/i) ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return 'IE';
  } else {
    return 'unknown';
  }
}
export default detectBrowser;
