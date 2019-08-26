import {
  EVT_INIT_SAMPLE, EVT_SORT_SAMPLE, EVT_RESET_SAMPLE, EVT_SET_SORTING,
} from 'constants/redux/redux.constants';

function SampleReducer(storeState = {}, action) {
  let finalStoreState;
  switch (action.type) {
    case EVT_INIT_SAMPLE:
      finalStoreState = { rows: action.rows, ...storeState };
      break;
    case EVT_SORT_SAMPLE:
      finalStoreState = {
        ...storeState,
        rows: action.rows,
      };
      break;
    case EVT_RESET_SAMPLE:
      finalStoreState = { ...storeState };
      break;
    case EVT_SET_SORTING:
      finalStoreState = {
        ...storeState,
        sorting: action.sorting,
      };
      break;
    default:
      finalStoreState = storeState;
  }
  console.log('SampleReducer.js: SampleReducer called => ', 'finalStoreState=', finalStoreState, 'action=', action);
  return finalStoreState;
}
export default SampleReducer;
