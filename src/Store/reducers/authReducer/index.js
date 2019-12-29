import actionTypes from '../../actionTypes';

const initialState = {
  isUserAuthenticated: false,
  authError: '',
}

const reducer = (state = initialState, action) => {
  const { payload, } = action;

  switch (action.type) {
    case actionTypes.signUpRequest:
      return {
        ...state,
        isUserAuthenticated: false,
        authError: '',
      };

    case actionTypes.signUpSuccess:
      return {
        ...state,
        ...payload,
        authError: '',
      };

    case actionTypes.signUpFailure:
      return {
        ...state,
        isUserAuthenticated: false,
        authError: payload.authError,
      };

    case actionTypes.updateField:
      return {
        ...state,
        authError: '',
      }

    default:
      return state;
  }
}

export default reducer;
