function scriptLoader(src) {
  const el = document.createElement('script');
  el.src = src;
  document.body.appendChild(el);
  return new Promise((resolve, reject) => {
    el.onload = event => resolve(event);
    el.onerror = () => reject(new Error(`Not loaded script '${src}'`));
  });
}

export default scriptLoader;
