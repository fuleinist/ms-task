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

export const sortSample = (rows, sorting) => {
  // Action to trigger sorting
  let updatedrows = [...rows];
  const columns = sorting.map((a) => a.name);
  const orderby = sorting.map((a) => a.status);
  if (sorting && sorting.length) {
    updatedrows = SORTING.multiSort(rows, columns, orderby);
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
