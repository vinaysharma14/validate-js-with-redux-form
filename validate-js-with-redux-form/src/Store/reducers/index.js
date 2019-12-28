import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer/index';
import uiReducer from './uiReducer/index';

const reducer = combineReducers({
  form: formReducer,
  authReducer,
  uiReducer,
})

export default reducer;
