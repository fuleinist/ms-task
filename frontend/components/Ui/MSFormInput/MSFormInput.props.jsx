import React from 'react';
import PropTypes from 'prop-types';

export const proptypes = {
  children: PropTypes.element.isRequired,
  model: PropTypes.element.isRequired,
  id: PropTypes.string,
  labelWidth: PropTypes.number,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  extraModel: PropTypes.string,
};

export const defaultprops = {
  children: () => <div />,
  model: () => <div />,
};
