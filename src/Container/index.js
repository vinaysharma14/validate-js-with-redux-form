import { connect } from 'react-redux';

import {
  signUpRequestAction,
  showToastrAction,
  hideToastrAction
} from '../Store/actions';

import Form from '../Components/Form';

const mapStateToProps = (store) => {
  return {
    authError: store.authReducer.authError,
    toastrVisible: store.uiReducer.toastrVisible,
    toastrHeader: store.uiReducer.toastrHeader,
    toastrBody: store.uiReducer.toastrBody,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest: (formValues) => dispatch(signUpRequestAction(formValues)),
    hideToastr: () => dispatch(hideToastrAction()),
    showToastr: (toastrHeader, toastrBody) => dispatch(showToastrAction(toastrHeader, toastrBody)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
