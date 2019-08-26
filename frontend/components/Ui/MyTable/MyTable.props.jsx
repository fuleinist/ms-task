import PropTypes from 'prop-types';

export const proptypes = {
  init: PropTypes.func,
  sort: PropTypes.func,
  find: PropTypes.func,
  updateSort: PropTypes.func,
  sorting: PropTypes.array,
  rows: PropTypes.array,
};

export const defaultprops = {
  init: () => {},
  sort: () => {},
  find: () => {},
  updateSort: () => {},
  sorting: [],
  rows: [],
};
