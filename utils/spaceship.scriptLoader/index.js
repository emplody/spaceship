function scriptLoader(src) {
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.src = src;

  document.body.appendChild(el);

  return new Promise((resolve, reject) => {
    el.onload = () => resolve('Successful script loading');
    el.onerror = () => reject(new Error(`Not loaded script '${src}'`));
  });
}

export default scriptLoader;
