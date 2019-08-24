/* eslint-disable no-restricted-syntax */
// flatObject({a:'a1', b:{b1:'b1'}, c:{c1: 'c1'},
//            {b: 1 } // 1 means ignore field 'b'
//            {c: 2 } // 2 means spread field 'c'
//           )
// got: {a: 'a1', c:{c1: 'c1'}}
function flatObject(obj, optionalIgnoreDict) {
  const allKeys = Object.keys(obj);
  const newObj = {};
  for (const key of allKeys) {
    if (!optionalIgnoreDict || !optionalIgnoreDict[key]) {
      // copy element
      newObj[key] = obj[key];
    } else if (optionalIgnoreDict[key] === 1) {
      // just ignore
      // do nothing
    } else if (optionalIgnoreDict[key] === 2) {
      // spread obj[key] into newObj
      for (const k of Object.keys(obj[key])) {
        newObj[k] = obj[key][k];
      }
    }
  }
  return newObj;
}


function isIE() {
  // @see https://github.com/gagle/js-ie-version/blob/master/lib/ie-version.js
  // "!win.ActiveXObject" is evaluated to true in IE11
  return window.ActiveXObject !== undefined;
}

function getRoutePath(p) {
  return (process.env.NODE_ENV !== 'production' ? '/' : '/') + (p || '');
}

function trim(s) {
  return s.replace(/^[\s]+|[\s]+$/g, '');
}

function validatorRequired(val) {
  console.log('CommonUtil.js: validatorRequired called => ', 'val=', val);
  return val && val.length > 0;
}

function validatorAlphaNumeric(val) {
  console.log('CommonUtil.js: validatorAlphaNumeric called => ', 'val=', val);
  return /^[a-zA-Z0-9]+$/.test(val);
}

function isEmpty(value) {
  return value === undefined || value === null;
}

export {
  flatObject,
  isEmpty,
  isIE,
  getRoutePath,
  trim,
  validatorRequired,
  validatorAlphaNumeric,
};
