import 'whatwg-fetch';

let Mockup = null;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  Mockup = require('supports/Mockup/Mockup.support');
}

function postJSON(url, optionalHeaders) {
  let URL = url;
  if (/\?/.test(URL)) {
    // work around ie cache issue
    // eslint-disable-next-line no-param-reassign
    URL += `&tm=${new Date().getTime()}`;
  }
  if (process.env.NODE_ENV !== 'production') {
    return Mockup.fakedFetch(url, 'GET', {}, optionalHeaders);
  }
  // return promise
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...optionalHeaders },
  }).then((response) => response.json());
}

function getJSON(url, optionalHeaders) {
  let URL = url;
  if (/\?/.test(URL)) {
    // work around ie cache issue
    URL += `&tm=${new Date().getTime()}`;
  }
  if (process.env.NODE_ENV !== 'production') {
    return Mockup.fakedFetch(url, 'GET', {}, optionalHeaders);
  }
  // return promise
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', ...optionalHeaders },
  }).then((response) => response.json());
}

function deleteJSON(url, optionalHeaders) {
  if (process.env.NODE_ENV !== 'production') {
    return Mockup.fakedFetch(url, 'DELETE', {}, optionalHeaders);
  }

  // return promise
  return fetch(url, {
    method: 'DELETE',
    headers: { ...optionalHeaders },
  }).then((response) => response.json());
}
// }}

export {
  postJSON,
  getJSON,
  deleteJSON,
};
