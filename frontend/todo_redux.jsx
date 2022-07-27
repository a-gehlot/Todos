import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import store from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions"

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.removeStep = removeStep;




document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container)
    root.render(
        <h1>Todos App</h1>
    )
})