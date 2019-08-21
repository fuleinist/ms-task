import 'whatwg-fetch';

let Mockup = null;
if('production' !== process.env.NODE_ENV) {
  Mockup=require('Mockup/Mockup.js');
}

function getJSON(url, optionalHeaders) {
  if(/\?/.test(url)) {
    // work around ie cache issue
    url += '&tm=' + new Date().getTime();
  }
  if('production' !== process.env.NODE_ENV) {
    return Mockup.fakedFetch(url, 'GET', {}, optionalHeaders);
  }
  // return promise
  return fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', ...optionalHeaders}
  }).then(function(response) {
    return response.json();
  });
}

function deleteJSON(url, optionalHeaders) {
  if('production' !== process.env.NODE_ENV) {
    return Mockup.fakedFetch(url, 'DELETE', {}, optionalHeaders);
  }

  // return promise
  return fetch(url, {
    method: 'DELETE',
    headers: {...optionalHeaders}
  }).then(function(response) {
    return response.json();
  });
}
// }}

export {
  postJSON,
  getJSON,
  deleteJSON,
};
