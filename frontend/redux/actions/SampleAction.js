import {
  EVT_INIT_SAMPLE, EVT_SORT_SAMPLE, EVT_RESET_SAMPLE, EVT_SET_SORTING,
} from 'constants/redux/redux.constants';
import { rows as ROWS } from 'components/Ui/MyTable/MyTable.utils';

/*
 * action creators
 */

export function initSample() {
  // take data from fetch or mock
  return { type: EVT_INIT_SAMPLE, rows: ROWS };
}

export function sortSample(payload) {
  // Action to trigger sorting
  const { rows } = payload;
  return {
    type: EVT_SORT_SAMPLE, rows,
  };
}

export function setSorting(payload) {
  // Action to update sorting
  return {
    type: EVT_SET_SORTING, sorting: payload,
  };
}


export function resetSample() {
  return { type: EVT_RESET_SAMPLE };
}
