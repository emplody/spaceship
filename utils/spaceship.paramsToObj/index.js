function paramsToObj() {
  const search = window.location.search.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(
        search
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') + '"}'
      )
  );
}

export default paramsToObj;
