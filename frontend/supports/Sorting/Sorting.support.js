/**
 * Convert an Array to an Object.
 *
 * @param {Array} a The Array to convert.
 * @param {Array} b The Array to convert.
 * @param {Array} seq The sequence array to follow sorting.
 * @returns {Array} The sorted Array.
 */

const SORTING = {
  /**
  * Function to sort multidimensional array
  *
  * param {array} [arr] Source array
  * param {array} [columns] List of columns to sort
  * param {array} [order_by] List of directions (ASC, DESC)
  * returns {array}
  */
  multiSort: (arr, columns, orderby) => {
    if (typeof columns === 'undefined') {
      // eslint-disable-next-line no-param-reassign
      columns = [];
      // eslint-disable-next-line no-plusplus
      for (let x = 0; x < arr[0].length; x++) {
        columns.push(x);
      }
    }

    if (typeof orderby === 'undefined') {
      // eslint-disable-next-line no-param-reassign
      orderby = [];
      // eslint-disable-next-line no-plusplus
      // for (let x = 0; x < arr[0].length; x++) {
      //   orderby.push('ASC');
      // }
    }

    const multiSortRecursive = (a, b, index) => {
      const direction = orderby[index] === 'DESC' ? 1 : 0;
      const isNumeric = !(+a[columns[index]] - +b[columns[index]]);
      const x = isNumeric ? +a[columns[index]] : a[columns[index]].toLowerCase();
      const y = isNumeric ? +b[columns[index]] : b[columns[index]].toLowerCase();

      if (x < y) {
        return direction === 0 ? -1 : 1;
      }
      if (x === y) {
        return columns.length - 1 > index ? multiSortRecursive(a, b, index + 1) : 0;
      }
      return direction === 0 ? 1 : -1;
    };

    return arr.sort((a, b) => multiSortRecursive(a, b, 0));
  },
};

export default SORTING;
