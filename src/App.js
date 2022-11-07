import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ZuzApp from './ZuzApp';


function App() {
  return (
    <Provider store={store}>
      <ZuzApp />
    </Provider>
  );
}

export default App;
