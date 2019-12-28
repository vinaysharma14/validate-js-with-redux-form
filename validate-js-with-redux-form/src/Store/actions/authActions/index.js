import actionTypes from '../../actionTypes';

export const signUpRequestAction = (formValues) => {
  return {
    type: actionTypes.signUpRequest,
    payload: formValues,
  }
}

export const signUpSuccessAction = (authObject) => {
  return {
    type: actionTypes.signUpSuccess,
    payload: authObject,
  }
}

export const signUpFailureAction = (error) => {
  return {
    type: actionTypes.signUpFailure,
    payload: {
      authError: error,
    },
  }
}
