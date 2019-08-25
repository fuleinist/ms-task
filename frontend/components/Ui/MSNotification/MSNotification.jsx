import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'react-notification';
import { proptypes, defaultprops } from 'components/Ui/MSNotification/MSNotification.props';
import { showNotification } from 'redux/actions/RootAction';

export class MSNotification extends React.Component {
  getNotificationMessage() {
    console.log('MSNotification.js: MSNotification.getNotificationMessage called => ', 'this.props.notificationMessage=', this.props.notificationMessage);
    return this.props.notificationMessage ? this.props.notificationMessage : '';
  }

  render() {
    return (
      <Notification
        isActive={this.props.showNotification}
        message={this.getNotificationMessage()}
        action="Dismiss"
        barStyle={{
          bottom: 'auto',
          top: '16px',
          left: 'auto',
          zIndex: 99999,
          right: '-100%',
        }}
        activeBarStyle={{
          right: '16px',
        }}
        onDismiss={this.props.close}
        dismissAfter={3000}
        onClick={this.props.close}
      />
    );
  }
}

MSNotification.propTypes = proptypes;
MSNotification.defaultProps = defaultprops;

function mapDispatchToProps(dispatch) {
  return ({
    close() {
      return dispatch(showNotification(false));
    },
  });
}

export default connect(
  // store state to props
  (storeState) => ({
    showNotification: storeState.app.showNotification,
    notificationMessage: storeState.app.notificationMessage,
  }),
  mapDispatchToProps,
)(MSNotification);
