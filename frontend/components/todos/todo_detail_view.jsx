import React from "react";

const TodoDetailView = (props) => {
    return(
        <ul>
            <li>Body: {props.todo.body}</li>
            <button onClick={e => props.removeTodo(props.todo)}>Delete</button>
        </ul>
    )
}

export default TodoDetailView;