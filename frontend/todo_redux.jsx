import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import store from './store/store'

window.store = store;


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container)
    root.render(
        <h1>Todos App</h1>
    )
})