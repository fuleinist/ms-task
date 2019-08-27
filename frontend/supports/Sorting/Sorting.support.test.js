
import SORTING from 'supports/Sorting/Sorting.support';
import {
  SORT_ASC, SORT_DESC,
} from 'constants/common/common.constants';


describe('SORTING', () => {
  const countries = {
    fi: 'Finland',
    dk: 'Denmark',
  };
  const rows = [
    {
      id: 100, name: 'John', tools: { hammer: true }, country: countries.fi,
    },
    {
      id: 101, name: 'Emma', tools: { hammer: false }, country: countries.dk,
    },
    {
      id: 102, name: 'Tom', tools: { hammer: false }, country: countries.dk,
    },
    {
      id: 103, name: 'Sam', tools: { hammer: false }, country: countries.dk,
    },
    {
      id: 104, name: 'Jason', tools: { hammer: true }, country: countries.dk,
    },
    {
      id: 105, name: 'Jack', tools: { hammer: false }, country: countries.dk,
    },
  ];
  beforeEach(() => {
  });
  it('should sort multidimensional array correctly', async () => {
    const columns = ['id', 'name'];
    const orderby = [SORT_DESC, SORT_ASC];
    expect(SORTING.multiSort(rows, columns, orderby)).toEqual({
      Alpha: 'Alpha',
      Bravo: 'Bravo',
      Charlie: 'Charlie',
    });
  });
  it('should return an empty array if an empty Array was passed', async () => {
    expect(SORTING.multiSort([])).toEqual([]);
    expect(SORTING.multiSort([undefined])).toEqual([]);
  });
});
