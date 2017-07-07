import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import CommentApp from './CommentApp';
import commentsReducer from './reducers/comments'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(commentsReducer)

ReactDOM.render(
    <Provider store = {store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
