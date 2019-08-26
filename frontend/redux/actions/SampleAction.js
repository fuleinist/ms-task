import {
  EVT_INIT_SAMPLE, EVT_SORT_SAMPLE, EVT_RESET_SAMPLE, EVT_SET_SORTING,
} from 'constants/redux/redux.constants';
import { rows as ROWS } from 'components/Ui/MyTable/MyTable.utils';
import SORTING from 'supports/Sorting/Sorting.support';

/*
 * action creators
 */

export function initSample() {
  // take data from fetch or mock
  return { type: EVT_INIT_SAMPLE, rows: ROWS };
}

export const sortSample = async (rows, sorting) => {
  // Action to trigger sorting
  let updatedrows = [...rows];
  const columns = sorting.map((a) => a.name);
  const orderby = sorting.map((a) => a.status);
  console.log({ rows, columns, orderby });
  if (sorting) {
    updatedrows = SORTING.multiSort(rows, columns, orderby);
    console.log(updatedrows);
  }
  return {
    type: EVT_SORT_SAMPLE, rows: updatedrows,
  };
};

export function setSorting(payload) {
  // Action to update sorting
  return {
    type: EVT_SET_SORTING, sorting: payload,
  };
}


export function resetSample() {
  return { type: EVT_RESET_SAMPLE };
}
