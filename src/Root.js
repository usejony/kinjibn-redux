/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

EStyleSheet.build({
    $themeColor: '#3fd47f',
    $themeBg: '#e6e8e7'
});

class Root extends React.Component {
    store = createStore(
        AppReducer,
        applyMiddleware(
            thunk,
            logger
        )
    );

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default Root;
