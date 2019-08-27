/* eslint-disable no-nested-ternary */
import React from 'react';
import MSGlyphicon from 'components/Ui/MSGlyphicon/MSGlyphicon';
import {
  SORT_ASC, SORT_DESC,
} from 'constants/common/common.constants';
import { proptypes, defaultprops } from 'components/Ui/MSSorter/MSSorter.props';

const MSSorter = (props) => {
  const { sort } = props;
  return (
    <span style={{ margin: '0 5px' }} className="Sorter">
      <span style={{ position: 'absolute', top: 5 }}><MSGlyphicon glyph="caret-up" className={sort === SORT_DESC ? 'hidden' : sort === SORT_ASC ? 'highlighted' : null} /></span>
      <span style={{ position: 'absolute', top: 13 }}><MSGlyphicon glyph="caret-down" className={sort === SORT_ASC ? 'hidden' : sort === SORT_DESC ? 'highlighted' : null} /></span>
    </span>
  );
};

MSSorter.propTypes = proptypes;
MSSorter.defaultProps = defaultprops;

export default MSSorter;
