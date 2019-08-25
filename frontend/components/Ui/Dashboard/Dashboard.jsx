import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';
import { proptypes, defaultprops } from 'components/Ui/Dashboard/Dashboard.props';

import {
  getRoutePath,
} from 'supports/Common/Common.support';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => this.context.router.push(getRoutePath('sample'))}>Go to sample page</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <p style={{ marginTop: 32 }}>Place your sample below this line (Dashboard/Dashboard.js):</p>
        <hr style={{ border: '1px solid black' }} />
      </div>
    );
  }
}

// latest way to dispatch
Dashboard.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  // eslint-disable-next-line react/forbid-prop-types
  router: React.PropTypes.object.isRequired,
};

export default connect(
  // store state to props
  () => ({})
  ,
)(Dashboard);

Dashboard.propTypes = proptypes;
Dashboard.defaultProps = defaultprops;
