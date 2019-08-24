import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//Reducers
const newFeedback = (state = {}, action) => {
    //feeling set
    if (action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload}
    }


    //always return something
    return state

}



//create store (with combine reducers)
const store = createStore(
    combineReducers({
        newFeedback,
    }),
    applyMiddleware(logger)
);

//wrap the app in Provider, provide store for use in the app!
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
