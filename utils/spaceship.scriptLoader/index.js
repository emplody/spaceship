function scriptLoader(src) {
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.src = src;
  document.body.appendChild(el);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 3000);
    el.onload = resolve;
    el.onerror = reject;
  });
}

export default scriptLoader;
