import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootReducer from 'redux/reducers/RootReducer';
import {
  validatorRequired,
  validatorAlphaNumeric,
} from 'supports/Common/Common.support';
import { LocalForm } from 'react-redux-form';
import MSFormInput from 'components/Ui/MSFormInput/MSFormInput';

const store = createStore(
  combineReducers({
    app: rootReducer,
    routing: routerReducer,
  }),
  {}, // initial state
);

describe('Test MSFormInput', () => {
  before(() => {
  });

  it('MSFormInput is rendered properly', () => {
    function save(values) {
      console.log('cashforecast-test.js: Function.save called => ', 'values=', values);
    }
    const formValidators = {
      bookmarkName: { required: validatorRequired, alphaNumeric: validatorAlphaNumeric },
    };
    const input = mount(
      <Provider store={store}>
        <LocalForm
          model="user"
          validators={formValidators}
          onSubmit={save}
          className="form-horizontal"
        >
          <MSFormInput
            labe
            labelWidth={4}
            messages={{ required: 'Required', alphaNumeric: 'Please input alphanumberica characters' }}
            model=".bookmarkName"
            autoFocus
          />
        </LocalForm>
      </Provider>,
    );
    expect(input.find('input')).to.have.length(1);
  });
});
