import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {store} from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";

const renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App /*state={state} dispatch={store.dispatch} store={store}*//>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))
}

renderEntireTree(store.getState())
// store.subscribe(function(){
//     renderEntireTree(store.getState())
// })