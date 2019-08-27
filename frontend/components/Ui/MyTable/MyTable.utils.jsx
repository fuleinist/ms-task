import {
  SORT_UNSORTED, SORT_ASC, SORT_DESC,
} from 'constants/common/common.constants';

export const rows = [
  {
    id: 100, name: 'John', tools: { hammer: true }, country: 'fi',
  },
  {
    id: 101, name: 'Emma', tools: { hammer: false }, country: 'dk',
  },
  {
    id: 102, name: 'Tom', tools: { hammer: false }, country: 'dk',
  },
  {
    id: 103, name: 'Sam', tools: { hammer: false }, country: 'dk',
  },
  {
    id: 104, name: 'Jason', tools: { hammer: true }, country: 'dk',
  },
  {
    id: 105, name: 'Jack', tools: { hammer: false }, country: 'dk',
  },
];

export const countries = {
  fi: 'Finland',
  dk: 'Denmark',
};

export const SortStatus = [SORT_UNSORTED, SORT_ASC, SORT_DESC];

export const setSort = (target, sorting) => {
  const setSortItem = (item) => {
    let updateitem = { ...item };
    if (updateitem.name === target) {
      updateitem.status = SortStatus[SortStatus.indexOf(updateitem.status) < SortStatus.length - 1 ? SortStatus.indexOf(updateitem.status) + 1 : 0];
    } else {
      updateitem = { name: target, status: SORT_ASC };
    }
    return updateitem;
  };
  const SORTING = sorting && sorting.length === 1 ? [...sorting] : [{ name: target, status: SORT_ASC }];
  // eslint-disable-next-line no-return-assign
  const UPDATED_SORTING = sorting && sorting.length ? SORTING.map(setSortItem).filter((a) => a.status !== SORT_UNSORTED) : SORTING;
  return UPDATED_SORTING;
};

export const setSortGroup = (target, sorting) => {
  // same sorting update but push array all new sortings
  const SORTING = sorting && sorting.length ? [...sorting] : [{ name: target, status: SORT_ASC }];
  const targetSorted = sorting.findIndex((e) => e.name === target);
  const setSortItem = (item) => {
    const updateitem = { ...item };
    if (updateitem.name === target) {
      updateitem.status = SortStatus[SortStatus.indexOf(updateitem.status) < SortStatus.length - 1 ? SortStatus.indexOf(updateitem.status) + 1 : 0];
    }
    return updateitem;
  };
  // eslint-disable-next-line no-return-assign
  const UPDATED_SORTING = sorting && sorting.length ? SORTING.map(setSortItem).filter((a) => a.status !== SORT_UNSORTED) : SORTING;
  if (targetSorted === -1 && sorting && sorting.length) {
    UPDATED_SORTING.unshift({ name: target, status: SORT_ASC });
  }
  // console.log({sorting, UPDATED_SORTING, targetsort: { name: target, status: 'ASC' }, targetSorted, msg: `setSort to ${JSON.stringify(UPDATED_SORTING)}`});
  return UPDATED_SORTING;
};

export const keyMap = (key, callback = () => {}) => {
  const listener = (event) => {
    // Bind key by name, e.g. ctrlKey
    callback(event[key]);
  };
  return {
    init: () => {
      window.addEventListener('keydown', listener);
      window.addEventListener('keyup', listener);
    },
    clear: () => {
      window.removeEventListener('keydown', listener);
      window.removeEventListener('keyup', listener);
    },
  };
};
