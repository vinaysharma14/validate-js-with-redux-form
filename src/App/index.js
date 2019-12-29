import React from 'react';
import { Provider } from 'react-redux';

import Container from '../Container';
import store from '../Store';

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
