import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

import {
  getRoutePath,
} from 'supports/Common/Common.support';

import MyTable from 'components/Ui/MyTable/MyTable';
import Modal from 'components/Ui/MyModal/MyModal';
import { showMyModal } from 'redux/actions/RootAction';

export class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.showMyModal = this.showMyModal.bind(this);
    this.state = {
    };
  }

  showMyModal() {
    console.log('showMyModal called');
    this.props.showMyModal();
  }

  render() {
    return (
      <div>
        <h1>Components samples</h1>
        <ButtonGroup>
          <Button onClick={() => this.context.router.push(getRoutePath())}>Goto Dashboard</Button>
        </ButtonGroup>
        <h2>Modal, Button toolbar:</h2>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={this.showMyModal}>Show my modal</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <h2>Table:</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <MyTable />
            </div>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

// latest way to dispatch
Sample.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  // eslint-disable-next-line react/forbid-prop-types
  router: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return ({
    showMyModal() {
      return dispatch(showMyModal(true));
    },
  });
}

export default connect(
  (storeState) => {
    // store state to props
    return {
    };
  },
  mapDispatchToProps,
)(Sample);
