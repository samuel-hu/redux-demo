import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { colors } from './reducers';
import { ZoidbergContainer } from './components';

import { changeColor } from './actions';

let store = createStore(
    colors,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const unsubscribe = store.subscribe(() => {console.log(store.getState().toJS())});
// store.dispatch(changeColor('#aa22aa'));
// store.dispatch(changeColor('#22aaaa'));
// store.dispatch(changeColor('#aa22aa'));
// store.dispatch(changeColor('#aaaa22'));
// unsubscribe();

ReactDOM.render(
    <Provider store={ store }>
        <ZoidbergContainer></ZoidbergContainer>
    </Provider>,
    document.getElementById('app')
);
