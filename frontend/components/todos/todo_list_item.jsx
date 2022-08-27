import React from "react";

function TodoListItem(props) {

    const toggleTodo = (e) => {
        const toggledTodo = Object.assign(
            {},
            props.todo,
            {done: !props.todo.done}
        )
        props.receiveTodo(toggledTodo)
    }

    return(
    <ul>
        Title:<li>{props.todo.title}</li>
        Body:<li>{props.todo.body}</li>
        <button onClick={e => props.removeTodo(props.todo)}>Delete</button>
        <button onClick={toggleTodo}>{props.todo.done ? "Undo" : "Done"}</button>
    </ul>)
}


export default TodoListItem;