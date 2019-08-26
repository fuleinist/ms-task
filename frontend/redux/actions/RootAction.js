import { EVT_DO_STH, EVT_SHOW_NOTIFICATION, EVT_SHOW_MY_MODAL } from 'constants/redux/redux.constants';

/*
 * action creators
 */

export function doSomething(text) {
  return { type: EVT_DO_STH, text };
}

export function showNotification(payload) {
  return { type: EVT_SHOW_NOTIFICATION, ...payload };
}

export function showMyModal(payload) {
  return { type: EVT_SHOW_MY_MODAL, showMyModal: payload };
}
