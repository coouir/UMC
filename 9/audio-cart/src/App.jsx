import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <main className='app'>
        <Cart />
      </main>
    </Provider>
  );
};

export default App;
