import { takeLatest, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

import actionTypes from '../../actionTypes';

import {
  signUpSuccessAction,
  signUpFailureAction
} from '../../actions';

import authenticateUser from '../../../services/authenticationServices';

function* authMiddleware(action) {
  const formValues = action.payload;

  try {
    yield put(startSubmit('Form'));
    const authObject = yield authenticateUser(formValues);
    yield put(signUpSuccessAction(authObject));
    yield put(stopSubmit('Form'));
  } catch (error) {
    yield put(signUpFailureAction(error.message));
    yield put(stopSubmit('Form'));
  }
}


export default function* userAuthSaga() {
  yield takeLatest(actionTypes.signUpRequest, authMiddleware);
}
