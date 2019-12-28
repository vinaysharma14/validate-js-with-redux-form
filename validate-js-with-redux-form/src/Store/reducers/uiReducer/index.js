import actionTypes from '../../actionTypes';

const initialState = {
  toastrVisible: false,
  toastrHeader: '',
  toastrBody: '',
};

const reducer = (state = initialState, action) => {
  const { payload, } = action;

  switch (action.type) {
    case actionTypes.showToastr:
      return {
        ...state,
        toastrVisible: true,
        toastrHeader: payload.toastrHeader,
        toastrBody: payload.toastrBody,
      }

    case actionTypes.hideToastr:
      return {
        ...state,
        toastrVisible: false,
        toastrHeader: '',
        toastrBody: '',
      }

    default:
      return state;
  }
}

export default reducer;
