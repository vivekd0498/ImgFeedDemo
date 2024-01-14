import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import rootReducer from './src/reducers';
import MainNavigator from './src/navigation/MainNavigator';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <MainNavigator />
    </Provider>
  );
};

export default App;
