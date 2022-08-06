import React from "react";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
    return(
        <ul>
            {props.todos.map((todo, idx) => {
                return(
                    <TodoListItem key={idx} todo={todo} />)
            })}
        </ul>
    )
}

export default TodoList;