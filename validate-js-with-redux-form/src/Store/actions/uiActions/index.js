import actionTypes from '../../actionTypes';

export const showToastrAction = (toastrHeader, toastrBody) => {
  return {
    type: actionTypes.showToastr,
    payload: {
      toastrHeader,
      toastrBody,
    },
  }
}

export const hideToastrAction = () => {
  return {
    type: actionTypes.hideToastr,
    payload: {},
  }
}
