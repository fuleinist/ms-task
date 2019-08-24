export function POST(url, data, headers) {
  // eslint-disable-next-line no-console
  console.log('test.mock.js: POST called', 'url=', url, 'data=', data, 'headers=', headers);
  return new Promise(((resolve, reject) => {
    if (data.username === 'user1' || data.username === 'user2') {
      resolve({
        username: null,
        password: null,
        token: 'abcd123456',
      });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        message: `${url}: failed`,
      });
    }
  }));
}

export function DELETE(url, data, headers) {
  return new Promise(((resolve, reject) => {
    resolve({
      headers,
      status: 'success',
      response: data,
    });
    // eslint-disable-next-line prefer-promise-reject-errors
    reject({
      message: `${url}: failed`,
    });
  }));
}
