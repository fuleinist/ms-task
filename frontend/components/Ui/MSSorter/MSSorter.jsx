/* eslint-disable no-nested-ternary */
import React from 'react';
import MSGlyphicon from 'components/Ui/MSGlyphicon/MSGlyphicon';

const MSSorter = (props) => {
  const { sort } = props;
  return (
    <span style={{ margin: '0 5px' }} className="Sorter">
      <span style={{ position: 'absolute', top: 5 }}><MSGlyphicon glyph="caret-up" className={sort === 'DESC' ? 'hidden' : sort === 'ASC' ? 'highlighted' : null} /></span>
      <span style={{ position: 'absolute', top: 13 }}><MSGlyphicon glyph="caret-down" className={sort === 'ASC' ? 'hidden' : sort === 'DESC' ? 'highlighted' : null} /></span>
    </span>
  );
};

export default MSSorter;
