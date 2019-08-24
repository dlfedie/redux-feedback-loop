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
const newFeedback = (state = {feeling: 'none', }, action) => {
    //doing a swtich statement for each form. adds a new key onto our store of new feedback.
    //default just returns state.
    
    switch (action.type) {
        case 'SET_FEELING':
            return { ...state, feeling: action.payload }
        case 'SET_UNDERSTANDING':
            return { ...state, understanding: action.payload}
        case 'SET_SUPPORTED':
            return { ...state, supported: action.payload}
        case 'SET_COMMENTS':
            return { ...state, comments: action.payload}
        case 'SET_DEFAULTS':
            return { feeling: 'none', }
        default:
            return state
    }


    

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
