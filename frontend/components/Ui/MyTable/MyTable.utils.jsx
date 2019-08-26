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

export const SortStatus = ['NA', 'ASC', 'DESC'];

export const setSort = (target, sorting) => {
  const SORTING = sorting && sorting.length ? [...sorting] : [{ name: target, status: 'ASC' }];
  // eslint-disable-next-line no-return-assign
  const UPDATED_SORTING = sorting ? SORTING.map((item) => {
    let updateitem = { ...item };
    if (updateitem.name === target) {
      updateitem.status = SortStatus[SortStatus.indexOf(updateitem.status) < SortStatus.length - 1 ? SortStatus.indexOf(updateitem.status) + 1 : 0];
    } else {
      updateitem = { name: target, status: 'ASC' };
    }
    return updateitem;
  }) : SORTING;
  return UPDATED_SORTING;
};

export const setSortGroup = (target, sorting) => {
  const SORTING = [...sorting] || [];
  // eslint-disable-next-line no-return-assign
  SORTING.map((e) => e.status = e.name === target ? SortStatus[SortStatus.indexOf(e.status) === SortStatus.length ? SortStatus.indexOf(e.status) + 1 : 0] : SortStatus[0]);
  if (!SORTING.find((e) => e.name === target)) { SORTING.push({ name: target, status: 'ASC' }); }
  return SORTING;
};
