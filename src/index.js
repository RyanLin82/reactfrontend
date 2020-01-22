// step1
// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import calculateSalaryReducer from './store/reducers/calculateSalary';
// import teamReducer from './store/reducers/team';

// const rootReducer = combineReducers({
//     team: teamReducer,
//     calculateSalary: calculateSalaryReducer
// });


// const store = createStore(rootReducer
//     , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const app = (
//     <Provider store = {store}>
//         <App/>
//     </Provider>
// );


// ReactDOM.render(app, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



//step2. add thunk
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import calculateSalaryReducer from './store/reducers/calculateSalary';
import teamReducer from './store/reducers/team';

const rootReducer = combineReducers({
    team: teamReducer,
    calculateSalary: calculateSalaryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer
    , composeEnhancers(
        applyMiddleware(thunk)
    ));

const app = (
    <Provider store = {store}>
        <App/>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

