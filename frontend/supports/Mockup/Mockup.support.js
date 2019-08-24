const fakedFetch = (url, method, data, optionalHeaders) => {
  console.log('Mockup.js: fakedFetch called', 'url=', url, 'method=', method, 'data=', data);
  // name of mockup js file should follow existing examples
  const mockupMatrix = [
    { regex: /api\/test$/, file: './test.mock.js' },
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const row of mockupMatrix) {
    if (row.regex.test(url)) {
      // eslint-disable-next-line
      return require(row.file)[method](url, data, optionalHeaders);
    }
  }
  // unknown API
  return new Promise();
};

export default fakedFetch;
