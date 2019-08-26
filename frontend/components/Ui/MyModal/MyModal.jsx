import React from 'react';
import { connect } from 'react-redux';
import { LocalForm } from 'react-redux-form';
import { Button, Modal } from 'react-bootstrap';
import MSFormInput from 'components/Ui/MSFormInput/MSFormInput';
import { validatorRequired, validatorAlphaNumeric, getRoutePath } from 'supports/Common/Common.support';
import { postJSON } from 'services/Http/Http.service';
import { proptypes, defaultprops } from 'components/Ui/MyModal/MyModal.props';
import { showNotification, showMyModal } from 'redux/actions/RootAction';


export class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.formValidators = {
      username: { required: validatorRequired, alphaNumeric: validatorAlphaNumeric },
      password: { required: validatorRequired },
    };
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      username: '', password: '', resultMessage: null,
    };
  }

  close() {
    this.props.close();
  }

  save(values) {
    const self = this;
    console.log('MyModal.js: MyModal.save called => ', 'values=', values);
    this.props.loginNow(values).then((token) => {
      console.log('MyModal.js: MyModal.save called => ', 'token=', token);
      if (!token) {
        self.setState({
          resultMessage: 'Token is null. User name should be either `user1` or `user2`!',
        });
      } else {
        self.props.showNotificationMessage(`Operation is successful! Got token: ${token}`);
        self.close();
      }
    });
  }

  render() {
    return (
      <Modal onHide={this.close} show={this.props.showMyModal}>
        <LocalForm
          model="user"
          validators={this.formValidators}
          onSubmit={this.save}
          className="form-horizontal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MSFormInput
              type="text"
              labelWidth={5}
              messages={{ required: 'Required', alphaNumeric: 'User name should be alphanumeric' }}
              model=".username"
              autoFocus
            >
              User name *
            </MSFormInput>
            <MSFormInput
              type="password"
              labelWidth={5}
              messages={{ required: 'Required' }}
              model=".password"
            >
              Password *
            </MSFormInput>
            { this.state.resultMessage ? <div style={{ color: 'red' }}>{this.state.resultMessage}</div> : null }
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">OK</Button>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </LocalForm>
      </Modal>
    );
  }
}

MyModal.propTypes = proptypes;
MyModal.defaultProps = defaultprops;

// latest way to use react-router 2.x
MyModal.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  // eslint-disable-next-line react/forbid-prop-types
  router: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return ({
    loginNow(values) {
      console.log('MyModal.js: ?.loginNow called => ', 'values=', values);
      return postJSON(getRoutePath('api/test'), {
        username: values.username,
        password: values.password,
      }).then((resp) => ((resp && resp.token) ? resp.token : null), (err) => err || null);
    },
    showNotificationMessage(msg) {
      return dispatch(showNotification({ showNotification: true, notificationMessage: msg }));
    },
    close() {
      return dispatch(showMyModal(false));
    },
  });
}
export default connect(
  // store state to props
  (storeState) => ({
    showMyModal: storeState.app.showMyModal,
  }),
  mapDispatchToProps,
)(MyModal);
