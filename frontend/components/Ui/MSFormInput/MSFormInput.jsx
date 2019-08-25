import React from 'react';
import { FormGroup, ControlLabel, Col } from 'react-bootstrap';
import { Errors, Field } from 'react-redux-form';
import { proptypes, defaultprops } from 'components/Ui/MSFormInput/MSFormInput.props';

export default class MSFormInput extends React.Component {
  getFormControlWidth() {
    return 12 - this.getLabelWidth();
  }

  getLabelWidth() {
    return this.props.labelWidth ? this.props.labelWidth : 2;
  }

  render() {
    // please use '<input>' instead of 'FormControl', react-redux-form problem
    return (
      <FormGroup>
        <Col sm={this.getLabelWidth()}>
          <ControlLabel>
            {this.props.children}
          </ControlLabel>
        </Col>
        <Col sm={this.getFormControlWidth()}>
          <Field model={this.props.model}>
            <input
              id={this.props.id}
              className="form-control"
              type={this.props.type ? this.props.type : 'text'}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={this.props.autoFocus}
            />
          </Field>
          <small id={this.props.id ? `${this.props.id}Errors` : null}>
            <Errors model={this.props.model} messages={this.props.messages} show={this.showErrors} />
            {
              this.props.extraModel ? <Errors model={this.props.extraModel} messages={this.props.messages} show={{ touched: true, focus: false }} /> : null
            }
          </small>
        </Col>
      </FormGroup>
    );
  }
}

MSFormInput.propTypes = proptypes;
MSFormInput.defaultProps = defaultprops;
