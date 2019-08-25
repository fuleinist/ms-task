import PropTypes from 'prop-types';

export const proptypes = {
  notificationMessage: PropTypes.string.isRequired,
  showNotification: PropTypes.bool,
  close: PropTypes.bool,
};

export const defaultprops = {
  notificationMessage: '',
  showNotification: false,
  close: false,
};
