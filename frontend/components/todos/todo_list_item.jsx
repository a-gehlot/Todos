import React from "react";

function TodoListItem(props) {
    return(
    <ul>
        Title:<li>{props.todo.title}</li>
        Body:<li>{props.todo.body}</li>
    </ul>)
}

export default TodoListItem;