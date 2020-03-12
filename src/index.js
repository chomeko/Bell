import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import FireStore, {fireReducer} from './fire/Store';

const persistConfig = {
  key: 'root',
  storage,
};

const persisteReducer = persistReducer(persistConfig, fireReducer);

let store = createStore(persisteReducer);
let pstore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null}
      persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);