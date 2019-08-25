// USAGE:
//   <MSGlyphicon glyph="users" className="fa-4x" />
//   Please note className is optional!
import React from 'react';
import { proptypes, defaultprops } from 'components/Ui/MSGlyphicon/MSGlyphicon.props';

class MSGlyphicon extends React.Component {
  getClassName() {
    return this.props.className ? this.props.className : '';
  }

  render() {
    return (
      <i className={`fa fa-${this.props.glyph} fa ${this.getClassName()}`} aria-hidden="true" />
    );
  }
}

MSGlyphicon.propTypes = proptypes;
MSGlyphicon.defaultProps = defaultprops;

export default MSGlyphicon;
